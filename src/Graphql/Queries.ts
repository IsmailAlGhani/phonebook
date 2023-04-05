import { gql, TypedDocumentNode } from "@apollo/client";
import {
  Contact,
  Query_Root,
  Query_RootContactArgs,
  Query_RootContact_By_PkArgs,
} from "../generated/graphql";

export interface ContactDetailData {
  contactDetail: Contact;
}

export const LOAD_CONTACT_LIST: TypedDocumentNode<
  Query_Root,
  Query_RootContactArgs
> = gql`
  query GetContactList($limit: Int, $offset: Int, $where: contact_bool_exp) {
    contact(limit: $limit, offset: $offset, where: $where) {
      created_at
      first_name
      id
      last_name
      phones {
        contact_id
        id
        number
      }
    }
  }
`;

export const LOAD_DETAIL_CONTACT: TypedDocumentNode<
  ContactDetailData,
  Query_RootContact_By_PkArgs
> = gql`
  query GetContactDetail($id: Int!) {
    contactDetail: contact_by_pk(id: $id) {
      last_name
      id
      first_name
      created_at
      phones {
        id
        number
      }
    }
  }
`;
