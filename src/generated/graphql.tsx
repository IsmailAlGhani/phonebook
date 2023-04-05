import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  json: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory = {
  __typename?: '_fuzzysearch_directory';
  company: Scalars['String'];
  department: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Aggregate = {
  __typename?: '_fuzzysearch_directory_aggregate';
  aggregate?: Maybe<_Fuzzysearch_Directory_Aggregate_Fields>;
  nodes: Array<_Fuzzysearch_Directory>;
};

/** aggregate fields of "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Aggregate_Fields = {
  __typename?: '_fuzzysearch_directory_aggregate_fields';
  avg?: Maybe<_Fuzzysearch_Directory_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Fuzzysearch_Directory_Max_Fields>;
  min?: Maybe<_Fuzzysearch_Directory_Min_Fields>;
  stddev?: Maybe<_Fuzzysearch_Directory_Stddev_Fields>;
  stddev_pop?: Maybe<_Fuzzysearch_Directory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Fuzzysearch_Directory_Stddev_Samp_Fields>;
  sum?: Maybe<_Fuzzysearch_Directory_Sum_Fields>;
  var_pop?: Maybe<_Fuzzysearch_Directory_Var_Pop_Fields>;
  var_samp?: Maybe<_Fuzzysearch_Directory_Var_Samp_Fields>;
  variance?: Maybe<_Fuzzysearch_Directory_Variance_Fields>;
};


/** aggregate fields of "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type _Fuzzysearch_Directory_Avg_Fields = {
  __typename?: '_fuzzysearch_directory_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "_fuzzysearch.directory". All fields are combined with a logical 'AND'. */
export type _Fuzzysearch_Directory_Bool_Exp = {
  _and?: InputMaybe<Array<_Fuzzysearch_Directory_Bool_Exp>>;
  _not?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
  _or?: InputMaybe<Array<_Fuzzysearch_Directory_Bool_Exp>>;
  company?: InputMaybe<String_Comparison_Exp>;
  department?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "_fuzzysearch.directory" */
export enum _Fuzzysearch_Directory_Constraint {
  /** unique or primary key constraint */
  DirectoryPkey = 'directory_pkey'
}

/** input type for incrementing numeric columns in table "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Insert_Input = {
  company?: InputMaybe<Scalars['String']>;
  department?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type _Fuzzysearch_Directory_Max_Fields = {
  __typename?: '_fuzzysearch_directory_max_fields';
  company?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type _Fuzzysearch_Directory_Min_Fields = {
  __typename?: '_fuzzysearch_directory_min_fields';
  company?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Mutation_Response = {
  __typename?: '_fuzzysearch_directory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Fuzzysearch_Directory>;
};

/** on_conflict condition type for table "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_On_Conflict = {
  constraint: _Fuzzysearch_Directory_Constraint;
  update_columns?: Array<_Fuzzysearch_Directory_Update_Column>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};

/** Ordering options when selecting data from "_fuzzysearch.directory". */
export type _Fuzzysearch_Directory_Order_By = {
  company?: InputMaybe<Order_By>;
  department?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _fuzzysearch_directory */
export type _Fuzzysearch_Directory_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "_fuzzysearch.directory" */
export enum _Fuzzysearch_Directory_Select_Column {
  /** column name */
  Company = 'company',
  /** column name */
  Department = 'department',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Set_Input = {
  company?: InputMaybe<Scalars['String']>;
  department?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type _Fuzzysearch_Directory_Stddev_Fields = {
  __typename?: '_fuzzysearch_directory_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type _Fuzzysearch_Directory_Stddev_Pop_Fields = {
  __typename?: '_fuzzysearch_directory_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type _Fuzzysearch_Directory_Stddev_Samp_Fields = {
  __typename?: '_fuzzysearch_directory_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type _Fuzzysearch_Directory_Sum_Fields = {
  __typename?: '_fuzzysearch_directory_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "_fuzzysearch.directory" */
export enum _Fuzzysearch_Directory_Update_Column {
  /** column name */
  Company = 'company',
  /** column name */
  Department = 'department',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type _Fuzzysearch_Directory_Var_Pop_Fields = {
  __typename?: '_fuzzysearch_directory_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type _Fuzzysearch_Directory_Var_Samp_Fields = {
  __typename?: '_fuzzysearch_directory_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type _Fuzzysearch_Directory_Variance_Fields = {
  __typename?: '_fuzzysearch_directory_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type _Fuzzysearch_Search_Args = {
  search?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** Table Contact  */
export type Contact = {
  __typename?: 'contact';
  created_at: Scalars['timestamptz'];
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
  /** An array relationship */
  phones: Array<Phone>;
  /** An aggregate relationship */
  phones_aggregate: Phone_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** Table Contact  */
export type ContactPhonesArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


/** Table Contact  */
export type ContactPhones_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};

/** aggregated selection of "contact" */
export type Contact_Aggregate = {
  __typename?: 'contact_aggregate';
  aggregate?: Maybe<Contact_Aggregate_Fields>;
  nodes: Array<Contact>;
};

/** aggregate fields of "contact" */
export type Contact_Aggregate_Fields = {
  __typename?: 'contact_aggregate_fields';
  avg?: Maybe<Contact_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Contact_Max_Fields>;
  min?: Maybe<Contact_Min_Fields>;
  stddev?: Maybe<Contact_Stddev_Fields>;
  stddev_pop?: Maybe<Contact_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contact_Stddev_Samp_Fields>;
  sum?: Maybe<Contact_Sum_Fields>;
  var_pop?: Maybe<Contact_Var_Pop_Fields>;
  var_samp?: Maybe<Contact_Var_Samp_Fields>;
  variance?: Maybe<Contact_Variance_Fields>;
};


/** aggregate fields of "contact" */
export type Contact_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contact_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Contact_Avg_Fields = {
  __typename?: 'contact_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "contact". All fields are combined with a logical 'AND'. */
export type Contact_Bool_Exp = {
  _and?: InputMaybe<Array<Contact_Bool_Exp>>;
  _not?: InputMaybe<Contact_Bool_Exp>;
  _or?: InputMaybe<Array<Contact_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  phones?: InputMaybe<Phone_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact" */
export enum Contact_Constraint {
  /** unique or primary key constraint */
  ContactPkey = 'contact_pkey'
}

/** input type for incrementing numeric columns in table "contact" */
export type Contact_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "contact" */
export type Contact_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  phones?: InputMaybe<Phone_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Contact_Max_Fields = {
  __typename?: 'contact_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Contact_Min_Fields = {
  __typename?: 'contact_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "contact" */
export type Contact_Mutation_Response = {
  __typename?: 'contact_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Contact>;
};

/** input type for inserting object relation for remote table "contact" */
export type Contact_Obj_Rel_Insert_Input = {
  data: Contact_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};

/** on_conflict condition type for table "contact" */
export type Contact_On_Conflict = {
  constraint: Contact_Constraint;
  update_columns?: Array<Contact_Update_Column>;
  where?: InputMaybe<Contact_Bool_Exp>;
};

/** Ordering options when selecting data from "contact". */
export type Contact_Order_By = {
  created_at?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  phones_aggregate?: InputMaybe<Phone_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contact */
export type Contact_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "contact" */
export enum Contact_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "contact" */
export type Contact_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Contact_Stddev_Fields = {
  __typename?: 'contact_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Contact_Stddev_Pop_Fields = {
  __typename?: 'contact_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Contact_Stddev_Samp_Fields = {
  __typename?: 'contact_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Contact_Sum_Fields = {
  __typename?: 'contact_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "contact" */
export enum Contact_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Contact_Var_Pop_Fields = {
  __typename?: 'contact_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Contact_Var_Samp_Fields = {
  __typename?: 'contact_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Contact_Variance_Fields = {
  __typename?: 'contact_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "elements" */
export type Elements = {
  __typename?: 'elements';
  element: Scalars['json'];
  id: Scalars['bigint'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['bigint'];
};


/** columns and relationships of "elements" */
export type ElementsElementArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "elements" */
export type Elements_Aggregate = {
  __typename?: 'elements_aggregate';
  aggregate?: Maybe<Elements_Aggregate_Fields>;
  nodes: Array<Elements>;
};

/** aggregate fields of "elements" */
export type Elements_Aggregate_Fields = {
  __typename?: 'elements_aggregate_fields';
  avg?: Maybe<Elements_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Elements_Max_Fields>;
  min?: Maybe<Elements_Min_Fields>;
  stddev?: Maybe<Elements_Stddev_Fields>;
  stddev_pop?: Maybe<Elements_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Elements_Stddev_Samp_Fields>;
  sum?: Maybe<Elements_Sum_Fields>;
  var_pop?: Maybe<Elements_Var_Pop_Fields>;
  var_samp?: Maybe<Elements_Var_Samp_Fields>;
  variance?: Maybe<Elements_Variance_Fields>;
};


/** aggregate fields of "elements" */
export type Elements_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Elements_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Elements_Avg_Fields = {
  __typename?: 'elements_avg_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "elements". All fields are combined with a logical 'AND'. */
export type Elements_Bool_Exp = {
  _and?: InputMaybe<Array<Elements_Bool_Exp>>;
  _not?: InputMaybe<Elements_Bool_Exp>;
  _or?: InputMaybe<Array<Elements_Bool_Exp>>;
  element?: InputMaybe<Json_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  project?: InputMaybe<Projects_Bool_Exp>;
  project_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "elements" */
export enum Elements_Constraint {
  /** unique or primary key constraint */
  ElementsPkey = 'elements_pkey'
}

/** input type for incrementing numeric columns in table "elements" */
export type Elements_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  project_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "elements" */
export type Elements_Insert_Input = {
  element?: InputMaybe<Scalars['json']>;
  id?: InputMaybe<Scalars['bigint']>;
  project?: InputMaybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Elements_Max_Fields = {
  __typename?: 'elements_max_fields';
  id?: Maybe<Scalars['bigint']>;
  project_id?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Elements_Min_Fields = {
  __typename?: 'elements_min_fields';
  id?: Maybe<Scalars['bigint']>;
  project_id?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "elements" */
export type Elements_Mutation_Response = {
  __typename?: 'elements_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Elements>;
};

/** on_conflict condition type for table "elements" */
export type Elements_On_Conflict = {
  constraint: Elements_Constraint;
  update_columns?: Array<Elements_Update_Column>;
  where?: InputMaybe<Elements_Bool_Exp>;
};

/** Ordering options when selecting data from "elements". */
export type Elements_Order_By = {
  element?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: elements */
export type Elements_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "elements" */
export enum Elements_Select_Column {
  /** column name */
  Element = 'element',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id'
}

/** input type for updating data in table "elements" */
export type Elements_Set_Input = {
  element?: InputMaybe<Scalars['json']>;
  id?: InputMaybe<Scalars['bigint']>;
  project_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Elements_Stddev_Fields = {
  __typename?: 'elements_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Elements_Stddev_Pop_Fields = {
  __typename?: 'elements_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Elements_Stddev_Samp_Fields = {
  __typename?: 'elements_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Elements_Sum_Fields = {
  __typename?: 'elements_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  project_id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "elements" */
export enum Elements_Update_Column {
  /** column name */
  Element = 'element',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id'
}

/** aggregate var_pop on columns */
export type Elements_Var_Pop_Fields = {
  __typename?: 'elements_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Elements_Var_Samp_Fields = {
  __typename?: 'elements_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Elements_Variance_Fields = {
  __typename?: 'elements_variance_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']>;
  _gt?: InputMaybe<Scalars['json']>;
  _gte?: InputMaybe<Scalars['json']>;
  _in?: InputMaybe<Array<Scalars['json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['json']>;
  _lte?: InputMaybe<Scalars['json']>;
  _neq?: InputMaybe<Scalars['json']>;
  _nin?: InputMaybe<Array<Scalars['json']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "_fuzzysearch.directory" */
  delete__fuzzysearch_directory?: Maybe<_Fuzzysearch_Directory_Mutation_Response>;
  /** delete single row from the table: "_fuzzysearch.directory" */
  delete__fuzzysearch_directory_by_pk?: Maybe<_Fuzzysearch_Directory>;
  /** delete data from the table: "contact" */
  delete_contact?: Maybe<Contact_Mutation_Response>;
  /** delete single row from the table: "contact" */
  delete_contact_by_pk?: Maybe<Contact>;
  /** delete data from the table: "elements" */
  delete_elements?: Maybe<Elements_Mutation_Response>;
  /** delete single row from the table: "elements" */
  delete_elements_by_pk?: Maybe<Elements>;
  /** delete data from the table: "phone" */
  delete_phone?: Maybe<Phone_Mutation_Response>;
  /** delete single row from the table: "phone" */
  delete_phone_by_pk?: Maybe<Phone>;
  /** delete data from the table: "playground.brands" */
  delete_playground_brands?: Maybe<Playground_Brands_Mutation_Response>;
  /** delete single row from the table: "playground.brands" */
  delete_playground_brands_by_pk?: Maybe<Playground_Brands>;
  /** delete data from the table: "projects" */
  delete_projects?: Maybe<Projects_Mutation_Response>;
  /** delete single row from the table: "projects" */
  delete_projects_by_pk?: Maybe<Projects>;
  /** insert data into the table: "_fuzzysearch.directory" */
  insert__fuzzysearch_directory?: Maybe<_Fuzzysearch_Directory_Mutation_Response>;
  /** insert a single row into the table: "_fuzzysearch.directory" */
  insert__fuzzysearch_directory_one?: Maybe<_Fuzzysearch_Directory>;
  /** insert data into the table: "contact" */
  insert_contact?: Maybe<Contact_Mutation_Response>;
  /** insert a single row into the table: "contact" */
  insert_contact_one?: Maybe<Contact>;
  /** insert data into the table: "elements" */
  insert_elements?: Maybe<Elements_Mutation_Response>;
  /** insert a single row into the table: "elements" */
  insert_elements_one?: Maybe<Elements>;
  /** insert data into the table: "phone" */
  insert_phone?: Maybe<Phone_Mutation_Response>;
  /** insert a single row into the table: "phone" */
  insert_phone_one?: Maybe<Phone>;
  /** insert data into the table: "playground.brands" */
  insert_playground_brands?: Maybe<Playground_Brands_Mutation_Response>;
  /** insert a single row into the table: "playground.brands" */
  insert_playground_brands_one?: Maybe<Playground_Brands>;
  /** insert data into the table: "projects" */
  insert_projects?: Maybe<Projects_Mutation_Response>;
  /** insert a single row into the table: "projects" */
  insert_projects_one?: Maybe<Projects>;
  /** update data of the table: "_fuzzysearch.directory" */
  update__fuzzysearch_directory?: Maybe<_Fuzzysearch_Directory_Mutation_Response>;
  /** update single row of the table: "_fuzzysearch.directory" */
  update__fuzzysearch_directory_by_pk?: Maybe<_Fuzzysearch_Directory>;
  /** update data of the table: "contact" */
  update_contact?: Maybe<Contact_Mutation_Response>;
  /** update single row of the table: "contact" */
  update_contact_by_pk?: Maybe<Contact>;
  /** update data of the table: "elements" */
  update_elements?: Maybe<Elements_Mutation_Response>;
  /** update single row of the table: "elements" */
  update_elements_by_pk?: Maybe<Elements>;
  /** update data of the table: "phone" */
  update_phone?: Maybe<Phone_Mutation_Response>;
  /** update single row of the table: "phone" */
  update_phone_by_pk?: Maybe<Phone>;
  /** update data of the table: "playground.brands" */
  update_playground_brands?: Maybe<Playground_Brands_Mutation_Response>;
  /** update single row of the table: "playground.brands" */
  update_playground_brands_by_pk?: Maybe<Playground_Brands>;
  /** update data of the table: "projects" */
  update_projects?: Maybe<Projects_Mutation_Response>;
  /** update single row of the table: "projects" */
  update_projects_by_pk?: Maybe<Projects>;
};


/** mutation root */
export type Mutation_RootDelete__Fuzzysearch_DirectoryArgs = {
  where: _Fuzzysearch_Directory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Fuzzysearch_Directory_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ContactArgs = {
  where: Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ElementsArgs = {
  where: Elements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Elements_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_PhoneArgs = {
  where: Phone_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Phone_By_PkArgs = {
  contact_id: Scalars['Int'];
  number: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Playground_BrandsArgs = {
  where: Playground_Brands_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Playground_Brands_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectsArgs = {
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Projects_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootInsert__Fuzzysearch_DirectoryArgs = {
  objects: Array<_Fuzzysearch_Directory_Insert_Input>;
  on_conflict?: InputMaybe<_Fuzzysearch_Directory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Fuzzysearch_Directory_OneArgs = {
  object: _Fuzzysearch_Directory_Insert_Input;
  on_conflict?: InputMaybe<_Fuzzysearch_Directory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContactArgs = {
  objects: Array<Contact_Insert_Input>;
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_OneArgs = {
  object: Contact_Insert_Input;
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ElementsArgs = {
  objects: Array<Elements_Insert_Input>;
  on_conflict?: InputMaybe<Elements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Elements_OneArgs = {
  object: Elements_Insert_Input;
  on_conflict?: InputMaybe<Elements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PhoneArgs = {
  objects: Array<Phone_Insert_Input>;
  on_conflict?: InputMaybe<Phone_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Phone_OneArgs = {
  object: Phone_Insert_Input;
  on_conflict?: InputMaybe<Phone_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Playground_BrandsArgs = {
  objects: Array<Playground_Brands_Insert_Input>;
  on_conflict?: InputMaybe<Playground_Brands_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Playground_Brands_OneArgs = {
  object: Playground_Brands_Insert_Input;
  on_conflict?: InputMaybe<Playground_Brands_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectsArgs = {
  objects: Array<Projects_Insert_Input>;
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Projects_OneArgs = {
  object: Projects_Insert_Input;
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate__Fuzzysearch_DirectoryArgs = {
  _inc?: InputMaybe<_Fuzzysearch_Directory_Inc_Input>;
  _set?: InputMaybe<_Fuzzysearch_Directory_Set_Input>;
  where: _Fuzzysearch_Directory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Fuzzysearch_Directory_By_PkArgs = {
  _inc?: InputMaybe<_Fuzzysearch_Directory_Inc_Input>;
  _set?: InputMaybe<_Fuzzysearch_Directory_Set_Input>;
  pk_columns: _Fuzzysearch_Directory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ContactArgs = {
  _inc?: InputMaybe<Contact_Inc_Input>;
  _set?: InputMaybe<Contact_Set_Input>;
  where: Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_By_PkArgs = {
  _inc?: InputMaybe<Contact_Inc_Input>;
  _set?: InputMaybe<Contact_Set_Input>;
  pk_columns: Contact_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ElementsArgs = {
  _inc?: InputMaybe<Elements_Inc_Input>;
  _set?: InputMaybe<Elements_Set_Input>;
  where: Elements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Elements_By_PkArgs = {
  _inc?: InputMaybe<Elements_Inc_Input>;
  _set?: InputMaybe<Elements_Set_Input>;
  pk_columns: Elements_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PhoneArgs = {
  _inc?: InputMaybe<Phone_Inc_Input>;
  _set?: InputMaybe<Phone_Set_Input>;
  where: Phone_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Phone_By_PkArgs = {
  _inc?: InputMaybe<Phone_Inc_Input>;
  _set?: InputMaybe<Phone_Set_Input>;
  pk_columns: Phone_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Playground_BrandsArgs = {
  _inc?: InputMaybe<Playground_Brands_Inc_Input>;
  _set?: InputMaybe<Playground_Brands_Set_Input>;
  where: Playground_Brands_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Playground_Brands_By_PkArgs = {
  _inc?: InputMaybe<Playground_Brands_Inc_Input>;
  _set?: InputMaybe<Playground_Brands_Set_Input>;
  pk_columns: Playground_Brands_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectsArgs = {
  _inc?: InputMaybe<Projects_Inc_Input>;
  _set?: InputMaybe<Projects_Set_Input>;
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Projects_By_PkArgs = {
  _inc?: InputMaybe<Projects_Inc_Input>;
  _set?: InputMaybe<Projects_Set_Input>;
  pk_columns: Projects_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Table Phone Numbers  */
export type Phone = {
  __typename?: 'phone';
  /** An object relationship */
  contact?: Maybe<Contact>;
  contact_id: Scalars['Int'];
  created_ad?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  number: Scalars['String'];
};

/** aggregated selection of "phone" */
export type Phone_Aggregate = {
  __typename?: 'phone_aggregate';
  aggregate?: Maybe<Phone_Aggregate_Fields>;
  nodes: Array<Phone>;
};

/** aggregate fields of "phone" */
export type Phone_Aggregate_Fields = {
  __typename?: 'phone_aggregate_fields';
  avg?: Maybe<Phone_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Phone_Max_Fields>;
  min?: Maybe<Phone_Min_Fields>;
  stddev?: Maybe<Phone_Stddev_Fields>;
  stddev_pop?: Maybe<Phone_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Phone_Stddev_Samp_Fields>;
  sum?: Maybe<Phone_Sum_Fields>;
  var_pop?: Maybe<Phone_Var_Pop_Fields>;
  var_samp?: Maybe<Phone_Var_Samp_Fields>;
  variance?: Maybe<Phone_Variance_Fields>;
};


/** aggregate fields of "phone" */
export type Phone_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Phone_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "phone" */
export type Phone_Aggregate_Order_By = {
  avg?: InputMaybe<Phone_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Phone_Max_Order_By>;
  min?: InputMaybe<Phone_Min_Order_By>;
  stddev?: InputMaybe<Phone_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Phone_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Phone_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Phone_Sum_Order_By>;
  var_pop?: InputMaybe<Phone_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Phone_Var_Samp_Order_By>;
  variance?: InputMaybe<Phone_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "phone" */
export type Phone_Arr_Rel_Insert_Input = {
  data: Array<Phone_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Phone_On_Conflict>;
};

/** aggregate avg on columns */
export type Phone_Avg_Fields = {
  __typename?: 'phone_avg_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "phone" */
export type Phone_Avg_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "phone". All fields are combined with a logical 'AND'. */
export type Phone_Bool_Exp = {
  _and?: InputMaybe<Array<Phone_Bool_Exp>>;
  _not?: InputMaybe<Phone_Bool_Exp>;
  _or?: InputMaybe<Array<Phone_Bool_Exp>>;
  contact?: InputMaybe<Contact_Bool_Exp>;
  contact_id?: InputMaybe<Int_Comparison_Exp>;
  created_ad?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  number?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "phone" */
export enum Phone_Constraint {
  /** unique or primary key constraint */
  PhoneIdKey = 'phone_id_key',
  /** unique or primary key constraint */
  PhoneNumberKey = 'phone_number_key',
  /** unique or primary key constraint */
  PhonePkey = 'phone_pkey'
}

/** input type for incrementing numeric columns in table "phone" */
export type Phone_Inc_Input = {
  contact_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "phone" */
export type Phone_Insert_Input = {
  contact?: InputMaybe<Contact_Obj_Rel_Insert_Input>;
  contact_id?: InputMaybe<Scalars['Int']>;
  created_ad?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  number?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Phone_Max_Fields = {
  __typename?: 'phone_max_fields';
  contact_id?: Maybe<Scalars['Int']>;
  created_ad?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "phone" */
export type Phone_Max_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  created_ad?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Phone_Min_Fields = {
  __typename?: 'phone_min_fields';
  contact_id?: Maybe<Scalars['Int']>;
  created_ad?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "phone" */
export type Phone_Min_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  created_ad?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "phone" */
export type Phone_Mutation_Response = {
  __typename?: 'phone_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Phone>;
};

/** on_conflict condition type for table "phone" */
export type Phone_On_Conflict = {
  constraint: Phone_Constraint;
  update_columns?: Array<Phone_Update_Column>;
  where?: InputMaybe<Phone_Bool_Exp>;
};

/** Ordering options when selecting data from "phone". */
export type Phone_Order_By = {
  contact?: InputMaybe<Contact_Order_By>;
  contact_id?: InputMaybe<Order_By>;
  created_ad?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
};

/** primary key columns input for table: phone */
export type Phone_Pk_Columns_Input = {
  contact_id: Scalars['Int'];
  number: Scalars['String'];
};

/** select columns of table "phone" */
export enum Phone_Select_Column {
  /** column name */
  ContactId = 'contact_id',
  /** column name */
  CreatedAd = 'created_ad',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number'
}

/** input type for updating data in table "phone" */
export type Phone_Set_Input = {
  contact_id?: InputMaybe<Scalars['Int']>;
  created_ad?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  number?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Phone_Stddev_Fields = {
  __typename?: 'phone_stddev_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "phone" */
export type Phone_Stddev_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Phone_Stddev_Pop_Fields = {
  __typename?: 'phone_stddev_pop_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "phone" */
export type Phone_Stddev_Pop_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Phone_Stddev_Samp_Fields = {
  __typename?: 'phone_stddev_samp_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "phone" */
export type Phone_Stddev_Samp_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Phone_Sum_Fields = {
  __typename?: 'phone_sum_fields';
  contact_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "phone" */
export type Phone_Sum_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "phone" */
export enum Phone_Update_Column {
  /** column name */
  ContactId = 'contact_id',
  /** column name */
  CreatedAd = 'created_ad',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number'
}

/** aggregate var_pop on columns */
export type Phone_Var_Pop_Fields = {
  __typename?: 'phone_var_pop_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "phone" */
export type Phone_Var_Pop_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Phone_Var_Samp_Fields = {
  __typename?: 'phone_var_samp_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "phone" */
export type Phone_Var_Samp_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Phone_Variance_Fields = {
  __typename?: 'phone_variance_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "phone" */
export type Phone_Variance_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** a table for store brands data */
export type Playground_Brands = {
  __typename?: 'playground_brands';
  brand_name: Scalars['String'];
  brand_owner: Scalars['String'];
  id: Scalars['Int'];
};

/** aggregated selection of "playground.brands" */
export type Playground_Brands_Aggregate = {
  __typename?: 'playground_brands_aggregate';
  aggregate?: Maybe<Playground_Brands_Aggregate_Fields>;
  nodes: Array<Playground_Brands>;
};

/** aggregate fields of "playground.brands" */
export type Playground_Brands_Aggregate_Fields = {
  __typename?: 'playground_brands_aggregate_fields';
  avg?: Maybe<Playground_Brands_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Playground_Brands_Max_Fields>;
  min?: Maybe<Playground_Brands_Min_Fields>;
  stddev?: Maybe<Playground_Brands_Stddev_Fields>;
  stddev_pop?: Maybe<Playground_Brands_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Playground_Brands_Stddev_Samp_Fields>;
  sum?: Maybe<Playground_Brands_Sum_Fields>;
  var_pop?: Maybe<Playground_Brands_Var_Pop_Fields>;
  var_samp?: Maybe<Playground_Brands_Var_Samp_Fields>;
  variance?: Maybe<Playground_Brands_Variance_Fields>;
};


/** aggregate fields of "playground.brands" */
export type Playground_Brands_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Playground_Brands_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Playground_Brands_Avg_Fields = {
  __typename?: 'playground_brands_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "playground.brands". All fields are combined with a logical 'AND'. */
export type Playground_Brands_Bool_Exp = {
  _and?: InputMaybe<Array<Playground_Brands_Bool_Exp>>;
  _not?: InputMaybe<Playground_Brands_Bool_Exp>;
  _or?: InputMaybe<Array<Playground_Brands_Bool_Exp>>;
  brand_name?: InputMaybe<String_Comparison_Exp>;
  brand_owner?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "playground.brands" */
export enum Playground_Brands_Constraint {
  /** unique or primary key constraint */
  BrandsPkey = 'brands_pkey'
}

/** input type for incrementing numeric columns in table "playground.brands" */
export type Playground_Brands_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "playground.brands" */
export type Playground_Brands_Insert_Input = {
  brand_name?: InputMaybe<Scalars['String']>;
  brand_owner?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Playground_Brands_Max_Fields = {
  __typename?: 'playground_brands_max_fields';
  brand_name?: Maybe<Scalars['String']>;
  brand_owner?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Playground_Brands_Min_Fields = {
  __typename?: 'playground_brands_min_fields';
  brand_name?: Maybe<Scalars['String']>;
  brand_owner?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "playground.brands" */
export type Playground_Brands_Mutation_Response = {
  __typename?: 'playground_brands_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Playground_Brands>;
};

/** on_conflict condition type for table "playground.brands" */
export type Playground_Brands_On_Conflict = {
  constraint: Playground_Brands_Constraint;
  update_columns?: Array<Playground_Brands_Update_Column>;
  where?: InputMaybe<Playground_Brands_Bool_Exp>;
};

/** Ordering options when selecting data from "playground.brands". */
export type Playground_Brands_Order_By = {
  brand_name?: InputMaybe<Order_By>;
  brand_owner?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: playground_brands */
export type Playground_Brands_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "playground.brands" */
export enum Playground_Brands_Select_Column {
  /** column name */
  BrandName = 'brand_name',
  /** column name */
  BrandOwner = 'brand_owner',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "playground.brands" */
export type Playground_Brands_Set_Input = {
  brand_name?: InputMaybe<Scalars['String']>;
  brand_owner?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Playground_Brands_Stddev_Fields = {
  __typename?: 'playground_brands_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Playground_Brands_Stddev_Pop_Fields = {
  __typename?: 'playground_brands_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Playground_Brands_Stddev_Samp_Fields = {
  __typename?: 'playground_brands_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Playground_Brands_Sum_Fields = {
  __typename?: 'playground_brands_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "playground.brands" */
export enum Playground_Brands_Update_Column {
  /** column name */
  BrandName = 'brand_name',
  /** column name */
  BrandOwner = 'brand_owner',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Playground_Brands_Var_Pop_Fields = {
  __typename?: 'playground_brands_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Playground_Brands_Var_Samp_Fields = {
  __typename?: 'playground_brands_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Playground_Brands_Variance_Fields = {
  __typename?: 'playground_brands_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "projects" */
export type Projects = {
  __typename?: 'projects';
  id: Scalars['bigint'];
  name: Scalars['String'];
  slug: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "projects" */
export type Projects_Aggregate = {
  __typename?: 'projects_aggregate';
  aggregate?: Maybe<Projects_Aggregate_Fields>;
  nodes: Array<Projects>;
};

/** aggregate fields of "projects" */
export type Projects_Aggregate_Fields = {
  __typename?: 'projects_aggregate_fields';
  avg?: Maybe<Projects_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Projects_Max_Fields>;
  min?: Maybe<Projects_Min_Fields>;
  stddev?: Maybe<Projects_Stddev_Fields>;
  stddev_pop?: Maybe<Projects_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Projects_Stddev_Samp_Fields>;
  sum?: Maybe<Projects_Sum_Fields>;
  var_pop?: Maybe<Projects_Var_Pop_Fields>;
  var_samp?: Maybe<Projects_Var_Samp_Fields>;
  variance?: Maybe<Projects_Variance_Fields>;
};


/** aggregate fields of "projects" */
export type Projects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Projects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Projects_Avg_Fields = {
  __typename?: 'projects_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type Projects_Bool_Exp = {
  _and?: InputMaybe<Array<Projects_Bool_Exp>>;
  _not?: InputMaybe<Projects_Bool_Exp>;
  _or?: InputMaybe<Array<Projects_Bool_Exp>>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  thumbnail?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "projects" */
export enum Projects_Constraint {
  /** unique or primary key constraint */
  ProjectsPkey = 'projects_pkey'
}

/** input type for incrementing numeric columns in table "projects" */
export type Projects_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "projects" */
export type Projects_Insert_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Projects_Max_Fields = {
  __typename?: 'projects_max_fields';
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Projects_Min_Fields = {
  __typename?: 'projects_min_fields';
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "projects" */
export type Projects_Mutation_Response = {
  __typename?: 'projects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Projects>;
};

/** input type for inserting object relation for remote table "projects" */
export type Projects_Obj_Rel_Insert_Input = {
  data: Projects_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};

/** on_conflict condition type for table "projects" */
export type Projects_On_Conflict = {
  constraint: Projects_Constraint;
  update_columns?: Array<Projects_Update_Column>;
  where?: InputMaybe<Projects_Bool_Exp>;
};

/** Ordering options when selecting data from "projects". */
export type Projects_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: projects */
export type Projects_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "projects" */
export enum Projects_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  Thumbnail = 'thumbnail',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "projects" */
export type Projects_Set_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Projects_Stddev_Fields = {
  __typename?: 'projects_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Projects_Stddev_Pop_Fields = {
  __typename?: 'projects_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Projects_Stddev_Samp_Fields = {
  __typename?: 'projects_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Projects_Sum_Fields = {
  __typename?: 'projects_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "projects" */
export enum Projects_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  Thumbnail = 'thumbnail',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Projects_Var_Pop_Fields = {
  __typename?: 'projects_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Projects_Var_Samp_Fields = {
  __typename?: 'projects_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Projects_Variance_Fields = {
  __typename?: 'projects_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "_fuzzysearch.directory" */
  _fuzzysearch_directory: Array<_Fuzzysearch_Directory>;
  /** fetch aggregated fields from the table: "_fuzzysearch.directory" */
  _fuzzysearch_directory_aggregate: _Fuzzysearch_Directory_Aggregate;
  /** fetch data from the table: "_fuzzysearch.directory" using primary key columns */
  _fuzzysearch_directory_by_pk?: Maybe<_Fuzzysearch_Directory>;
  /** execute function "_fuzzysearch.search" which returns "_fuzzysearch.directory" */
  _fuzzysearch_search: Array<_Fuzzysearch_Directory>;
  /** execute function "_fuzzysearch.search" and query aggregates on result of table type "_fuzzysearch.directory" */
  _fuzzysearch_search_aggregate: _Fuzzysearch_Directory_Aggregate;
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: Contact_Aggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table: "elements" */
  elements: Array<Elements>;
  /** fetch aggregated fields from the table: "elements" */
  elements_aggregate: Elements_Aggregate;
  /** fetch data from the table: "elements" using primary key columns */
  elements_by_pk?: Maybe<Elements>;
  /** fetch data from the table: "phone" */
  phone: Array<Phone>;
  /** fetch aggregated fields from the table: "phone" */
  phone_aggregate: Phone_Aggregate;
  /** fetch data from the table: "phone" using primary key columns */
  phone_by_pk?: Maybe<Phone>;
  /** fetch data from the table: "playground.brands" */
  playground_brands: Array<Playground_Brands>;
  /** fetch aggregated fields from the table: "playground.brands" */
  playground_brands_aggregate: Playground_Brands_Aggregate;
  /** fetch data from the table: "playground.brands" using primary key columns */
  playground_brands_by_pk?: Maybe<Playground_Brands>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
};


export type Query_Root_Fuzzysearch_DirectoryArgs = {
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Query_Root_Fuzzysearch_Directory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Query_Root_Fuzzysearch_Directory_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_Root_Fuzzysearch_SearchArgs = {
  args: _Fuzzysearch_Search_Args;
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Query_Root_Fuzzysearch_Search_AggregateArgs = {
  args: _Fuzzysearch_Search_Args;
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Query_RootContactArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Query_RootContact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Query_RootContact_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootElementsArgs = {
  distinct_on?: InputMaybe<Array<Elements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Elements_Order_By>>;
  where?: InputMaybe<Elements_Bool_Exp>;
};


export type Query_RootElements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Elements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Elements_Order_By>>;
  where?: InputMaybe<Elements_Bool_Exp>;
};


export type Query_RootElements_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootPhoneArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


export type Query_RootPhone_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


export type Query_RootPhone_By_PkArgs = {
  contact_id: Scalars['Int'];
  number: Scalars['String'];
};


export type Query_RootPlayground_BrandsArgs = {
  distinct_on?: InputMaybe<Array<Playground_Brands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Playground_Brands_Order_By>>;
  where?: InputMaybe<Playground_Brands_Bool_Exp>;
};


export type Query_RootPlayground_Brands_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Playground_Brands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Playground_Brands_Order_By>>;
  where?: InputMaybe<Playground_Brands_Bool_Exp>;
};


export type Query_RootPlayground_Brands_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Query_RootProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Query_RootProjects_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "_fuzzysearch.directory" */
  _fuzzysearch_directory: Array<_Fuzzysearch_Directory>;
  /** fetch aggregated fields from the table: "_fuzzysearch.directory" */
  _fuzzysearch_directory_aggregate: _Fuzzysearch_Directory_Aggregate;
  /** fetch data from the table: "_fuzzysearch.directory" using primary key columns */
  _fuzzysearch_directory_by_pk?: Maybe<_Fuzzysearch_Directory>;
  /** execute function "_fuzzysearch.search" which returns "_fuzzysearch.directory" */
  _fuzzysearch_search: Array<_Fuzzysearch_Directory>;
  /** execute function "_fuzzysearch.search" and query aggregates on result of table type "_fuzzysearch.directory" */
  _fuzzysearch_search_aggregate: _Fuzzysearch_Directory_Aggregate;
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: Contact_Aggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table: "elements" */
  elements: Array<Elements>;
  /** fetch aggregated fields from the table: "elements" */
  elements_aggregate: Elements_Aggregate;
  /** fetch data from the table: "elements" using primary key columns */
  elements_by_pk?: Maybe<Elements>;
  /** fetch data from the table: "phone" */
  phone: Array<Phone>;
  /** fetch aggregated fields from the table: "phone" */
  phone_aggregate: Phone_Aggregate;
  /** fetch data from the table: "phone" using primary key columns */
  phone_by_pk?: Maybe<Phone>;
  /** fetch data from the table: "playground.brands" */
  playground_brands: Array<Playground_Brands>;
  /** fetch aggregated fields from the table: "playground.brands" */
  playground_brands_aggregate: Playground_Brands_Aggregate;
  /** fetch data from the table: "playground.brands" using primary key columns */
  playground_brands_by_pk?: Maybe<Playground_Brands>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
};


export type Subscription_Root_Fuzzysearch_DirectoryArgs = {
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Subscription_Root_Fuzzysearch_Directory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Subscription_Root_Fuzzysearch_Directory_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_Root_Fuzzysearch_SearchArgs = {
  args: _Fuzzysearch_Search_Args;
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Subscription_Root_Fuzzysearch_Search_AggregateArgs = {
  args: _Fuzzysearch_Search_Args;
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Subscription_RootContactArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Subscription_RootContact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Subscription_RootContact_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootElementsArgs = {
  distinct_on?: InputMaybe<Array<Elements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Elements_Order_By>>;
  where?: InputMaybe<Elements_Bool_Exp>;
};


export type Subscription_RootElements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Elements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Elements_Order_By>>;
  where?: InputMaybe<Elements_Bool_Exp>;
};


export type Subscription_RootElements_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootPhoneArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


export type Subscription_RootPhone_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


export type Subscription_RootPhone_By_PkArgs = {
  contact_id: Scalars['Int'];
  number: Scalars['String'];
};


export type Subscription_RootPlayground_BrandsArgs = {
  distinct_on?: InputMaybe<Array<Playground_Brands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Playground_Brands_Order_By>>;
  where?: InputMaybe<Playground_Brands_Bool_Exp>;
};


export type Subscription_RootPlayground_Brands_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Playground_Brands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Playground_Brands_Order_By>>;
  where?: InputMaybe<Playground_Brands_Bool_Exp>;
};


export type Subscription_RootPlayground_Brands_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootProjects_By_PkArgs = {
  id: Scalars['bigint'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};
