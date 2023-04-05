import { NetworkStatus, useMutation, useQuery } from "@apollo/client";
import { ButtonProps, notification } from "antd";
import idx from "idx";
import { createContext, useState } from "react";
import {
  Contact,
  Contact_Set_Input,
  Phone_Insert_Input,
  Query_Root,
} from "../generated/graphql";
import {
  MUTATION_ADD_PHONE,
  MUTATION_CREATE_CONTACT,
  MUTATION_DELETE_CONTACT,
  MUTATION_UPDATE_CONTACT,
} from "../Graphql/Mutation";
import { LOAD_CONTACT_LIST } from "../Graphql/Queries";

export type ContactPageType = {
  offset: number;
  limit: number;
  firstName: string | null;
  lastName: string | null;
};

export type ContactContextType = {
  data: Contact[];
  isLoading: boolean;
  loadMore: boolean;
  onSearch: (value: string) => void;
  onLoadMore:
    | (React.MouseEventHandler<HTMLAnchorElement> &
        React.MouseEventHandler<HTMLButtonElement>)
    | undefined;
  deleteContact: (id: string, navigate: () => void) => void;
  openConfirm: boolean;
  confirmLoading: boolean;
  showPopConfirm: () => void;
  closePopConfirm: () => void;
  createContact: (
    first_name: string,
    last_name: string,
    phones: Phone_Insert_Input[],
    navigate: () => void
  ) => void;
  updateContact: (
    id: number,
    setData: Contact_Set_Input,
    phonData: Array<Phone_Insert_Input>,
    navigate: () => void
  ) => void;
};

interface Props {
  children: React.ReactNode;
}

export const ContactContext = createContext<ContactContextType | null>(null);

const ContactProvider: React.FC<Props> = ({ children }) => {
  const [param, setParam] = useState<ContactPageType>({
    offset: 0,
    limit: 10,
    firstName: null,
    lastName: null,
  });

  const [mutationDeleteContact] = useMutation(MUTATION_DELETE_CONTACT);
  const [mutationCreateContact] = useMutation(MUTATION_CREATE_CONTACT);
  const [mutationUpdateContact] = useMutation(MUTATION_UPDATE_CONTACT);
  const [mutationAddPhone] = useMutation(MUTATION_ADD_PHONE);

  const [openConfirm, setOpenConfirm] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [data, setData] = useState<Contact[]>([]);

  const [loadMore, setLoadMore] = useState(false);

  const onAfterComplete = (dataComplete: Query_Root) => {
    const dataCompleteFinal = idx(dataComplete, (_) => _.contact) || [];
    const currentLength = dataCompleteFinal.length;
    if (currentLength - param.offset === 10) {
      setLoadMore(true);
    } else {
      setLoadMore(false);
    }
    setData(dataCompleteFinal);
    console.log("masuk");
  };

  const { networkStatus, refetch, fetchMore } = useQuery(LOAD_CONTACT_LIST, {
    variables: {
      offset: param.offset,
      limit: param.limit,
      ...(param.firstName && {
        where: {
          ...(param.firstName && {
            first_name: { _like: `%${param.firstName}%` },
          }),
          ...(param.lastName && {
            last_name: { _like: `%${param.lastName}%` },
          }),
        },
      }),
    },
    notifyOnNetworkStatusChange: true,
    onCompleted: (dataComplete) => onAfterComplete(dataComplete),
  });

  const isLoading =
    networkStatus === NetworkStatus.loading ||
    networkStatus === NetworkStatus.refetch;

  const deleteContact = (id: string, navigate: () => void) => {
    setConfirmLoading(true);
    mutationDeleteContact({
      variables: {
        id: parseInt(id || "0"),
      },
    }).then((dataResponse) => {
      const contactData = idx(dataResponse, (_) => _.data.delete_contact_by_pk);
      const { first_name, last_name, id } = contactData || {};
      setConfirmLoading(false);
      setOpenConfirm(false);
      if (contactData) {
        notification.success({
          message: "Remove Contact",
          description: `${first_name + " " + last_name} contact already delete`,
        });
        const filterData = data.filter((item) => item.id !== id);
        setData(filterData);
        navigate();
      }
    });
  };

  const createContact = (
    first_name: string,
    last_name: string,
    phones: Phone_Insert_Input[],
    navigate: () => void
  ) => {
    mutationCreateContact({
      variables: {
        first_name,
        last_name,
        phones,
      },
    }).then((dataResponse) => {
      const contactData =
        idx(dataResponse, (_) => _.data.insert_contact.returning) || [];
      if (contactData.length) {
        const dataCreated = idx(contactData, (_) => _[0]);
        const { first_name, last_name } = dataCreated || {};
        notification.success({
          message: "Create Contact Success!",
          description: `${
            first_name + " " + last_name
          } contact already created!`,
        });
        refetch({
          offset: 0,
          limit: 10,
          ...(param.firstName && {
            where: {
              ...(param.firstName && {
                first_name: { _like: `%${param.firstName}%` },
              }),
              ...(param.lastName && {
                last_name: { _like: `%${param.lastName}%` },
              }),
            },
          }),
        });
        navigate();
      }
    });
  };

  const updateContact = async (
    id: number,
    setData: Contact_Set_Input,
    phoneData: Array<Phone_Insert_Input>,
    navigate: () => void
  ) => {
    await mutationUpdateContact({
      variables: {
        id,
        _set: setData,
        where: {
          contact_id: {
            _eq: id,
          },
        },
      },
    });
    await mutationAddPhone({
      variables: {
        objects: phoneData,
      },
    }).then(() => {
      const { first_name, last_name } = setData;
      notification.success({
        message: "Update Contact Success!",
        description: `${first_name + " " + last_name} contact already updated!`,
      });
      navigate();
    });
  };

  const showPopConfirm = () => {
    setOpenConfirm(true);
  };

  const closePopConfirm = () => {
    setOpenConfirm(false);
  };

  const onSearch = (value: string) => {
    const indexOfSpace = value.indexOf(" ");
    let firstName = "";
    let lastName = "";
    if (indexOfSpace !== -1) {
      firstName = value.slice(0, indexOfSpace);
      lastName = value.slice(indexOfSpace + 1);
    } else {
      if (value) {
        firstName = value;
        lastName = "";
      }
    }
    setParam((prevState) => ({
      ...prevState,
      offset: 0,
      limit: 10,
      firstName: firstName || null,
      lastName: lastName || null,
    }));
    refetch({
      offset: 0,
      limit: 10,
      ...(firstName && {
        where: {
          ...(firstName && { first_name: { _like: `%${firstName || null}%` } }),
          ...(lastName && { last_name: { _like: `%${lastName || null}%` } }),
        },
      }),
    });
  };

  const onLoadMore: ButtonProps["onClick"] = async () => {
    const currentLength = data.length;
    setParam((prevState) => ({
      ...prevState,
      offset: currentLength,
      limit: currentLength * 2,
    }));
    await fetchMore({
      variables: {
        offset: currentLength,
        limit: currentLength * 2,
      },
    });
  };

  return (
    <ContactContext.Provider
      value={{
        data,
        isLoading,
        loadMore,
        onSearch,
        onLoadMore,
        deleteContact,
        openConfirm,
        confirmLoading,
        showPopConfirm,
        closePopConfirm,
        createContact,
        updateContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
