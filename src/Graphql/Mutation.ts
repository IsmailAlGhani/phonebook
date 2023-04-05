import { gql, TypedDocumentNode } from "@apollo/client";
import {
  Contact_Set_Input,
  InputMaybe,
  Mutation_Root,
  Mutation_RootDelete_Contact_By_PkArgs,
  Mutation_RootDelete_PhoneArgs,
  Mutation_RootDelete_Phone_By_PkArgs,
  Mutation_RootInsert_PhoneArgs,
  Phone_Bool_Exp,
  Phone_Insert_Input,
  Phone_Pk_Columns_Input,
  Phone_Set_Input,
} from "../generated/graphql";

export const MUTATION_DELETE_CONTACT: TypedDocumentNode<
  Mutation_Root,
  Mutation_RootDelete_Contact_By_PkArgs
> = gql`
  mutation MyMutation($id: Int!) {
    delete_contact_by_pk(id: $id) {
      first_name
      last_name
      id
    }
  }
`;

export type Mutation_RootCreate_ContactArgs = {
  first_name: string;
  last_name: string;
  phones: Phone_Insert_Input[];
};

export const MUTATION_CREATE_CONTACT: TypedDocumentNode<
  Mutation_Root,
  Mutation_RootCreate_ContactArgs
> = gql`
  mutation AddContactWithPhones(
    $first_name: String!
    $last_name: String!
    $phones: [phone_insert_input!]!
  ) {
    insert_contact(
      objects: {
        first_name: $first_name
        last_name: $last_name
        phones: { data: $phones }
      }
    ) {
      returning {
        first_name
        last_name
        id
        phones {
          number
        }
      }
    }
  }
`;

type Mutation_RootUpdate_Contact = {
  id: number;
  _set: Contact_Set_Input;
  where: Phone_Bool_Exp;
};

export const MUTATION_UPDATE_CONTACT: TypedDocumentNode<
  Mutation_Root,
  Mutation_RootUpdate_Contact
> = gql`
  mutation EditContactById(
    $id: Int!
    $_set: contact_set_input
    $where: phone_bool_exp!
  ) {
    update_contact_by_pk(pk_columns: { id: $id }, _set: $_set) {
      id
      first_name
      last_name
    }
    delete_phone(where: $where) {
      returning {
        contact_id
        number
      }
    }
  }
`;

export const MUTATION_DELETE_PHONE: TypedDocumentNode<
  Mutation_Root,
  Mutation_RootDelete_PhoneArgs
> = gql`
  mutation MutationDeletePhone($where: phone_bool_exp!) {
    delete_phone(where: $where) {
      returning {
        contact_id
        number
      }
    }
  }
`;

export const MUTATION_ADD_PHONE: TypedDocumentNode<
  Mutation_Root,
  Mutation_RootInsert_PhoneArgs
> = gql`
  mutation MutationInsetPhone($objects: [phone_insert_input!]!) {
    insert_phone(objects: $objects) {
      returning {
        contact {
          id
          last_name
          first_name
          phones {
            number
          }
        }
      }
    }
  }
`;
