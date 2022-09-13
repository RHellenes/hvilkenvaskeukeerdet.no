type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type HousingRelateToManyInput = {
  readonly create?: ReadonlyArray<HousingCreateInput | null> | null;
  readonly connect?: ReadonlyArray<HousingWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<HousingWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly choreDoneDate?: Scalars['String'] | null;
  readonly choreDoneDate_not?: Scalars['String'] | null;
  readonly choreDoneDate_lt?: Scalars['String'] | null;
  readonly choreDoneDate_lte?: Scalars['String'] | null;
  readonly choreDoneDate_gt?: Scalars['String'] | null;
  readonly choreDoneDate_gte?: Scalars['String'] | null;
  readonly choreDoneDate_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly choreDoneDate_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly choreDoneCounter?: Scalars['Int'] | null;
  readonly choreDoneCounter_not?: Scalars['Int'] | null;
  readonly choreDoneCounter_lt?: Scalars['Int'] | null;
  readonly choreDoneCounter_lte?: Scalars['Int'] | null;
  readonly choreDoneCounter_gt?: Scalars['Int'] | null;
  readonly choreDoneCounter_gte?: Scalars['Int'] | null;
  readonly choreDoneCounter_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly choreDoneCounter_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly housingOwnerOf_every?: HousingWhereInput | null;
  readonly housingOwnerOf_some?: HousingWhereInput | null;
  readonly housingOwnerOf_none?: HousingWhereInput | null;
  readonly housingMemberOf_every?: HousingWhereInput | null;
  readonly housingMemberOf_some?: HousingWhereInput | null;
  readonly housingMemberOf_none?: HousingWhereInput | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'choreDoneDate_ASC'
  | 'choreDoneDate_DESC'
  | 'choreDoneCounter_ASC'
  | 'choreDoneCounter_DESC'
  | 'housingOwnerOf_ASC'
  | 'housingOwnerOf_DESC'
  | 'housingMemberOf_ASC'
  | 'housingMemberOf_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly choreDoneDate?: Scalars['String'] | null;
  readonly choreDoneCounter?: Scalars['Int'] | null;
  readonly housingOwnerOf?: HousingRelateToManyInput | null;
  readonly housingMemberOf?: HousingRelateToManyInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly choreDoneDate?: Scalars['String'] | null;
  readonly choreDoneCounter?: Scalars['Int'] | null;
  readonly housingOwnerOf?: HousingRelateToManyInput | null;
  readonly housingMemberOf?: HousingRelateToManyInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type ChoreWhereInput = {
  readonly AND?: ReadonlyArray<ChoreWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ChoreWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly title?: Scalars['String'] | null;
  readonly title_not?: Scalars['String'] | null;
  readonly title_contains?: Scalars['String'] | null;
  readonly title_not_contains?: Scalars['String'] | null;
  readonly title_starts_with?: Scalars['String'] | null;
  readonly title_not_starts_with?: Scalars['String'] | null;
  readonly title_ends_with?: Scalars['String'] | null;
  readonly title_not_ends_with?: Scalars['String'] | null;
  readonly title_i?: Scalars['String'] | null;
  readonly title_not_i?: Scalars['String'] | null;
  readonly title_contains_i?: Scalars['String'] | null;
  readonly title_not_contains_i?: Scalars['String'] | null;
  readonly title_starts_with_i?: Scalars['String'] | null;
  readonly title_not_starts_with_i?: Scalars['String'] | null;
  readonly title_ends_with_i?: Scalars['String'] | null;
  readonly title_not_ends_with_i?: Scalars['String'] | null;
  readonly title_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly title_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type ChoreWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortChoresBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'description_ASC'
  | 'description_DESC';

export type ChoreUpdateInput = {
  readonly title?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
};

export type ChoresUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ChoreUpdateInput | null;
};

export type ChoreCreateInput = {
  readonly title?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
};

export type ChoresCreateInput = {
  readonly data?: ChoreCreateInput | null;
};

export type ProductImageRelateToOneInput = {
  readonly create?: ProductImageCreateInput | null;
  readonly connect?: ProductImageWhereUniqueInput | null;
  readonly disconnect?: ProductImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProductWhereInput = {
  readonly AND?: ReadonlyArray<ProductWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProductWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly photo?: ProductImageWhereInput | null;
  readonly photo_is_null?: Scalars['Boolean'] | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_contains?: Scalars['String'] | null;
  readonly status_not_contains?: Scalars['String'] | null;
  readonly status_starts_with?: Scalars['String'] | null;
  readonly status_not_starts_with?: Scalars['String'] | null;
  readonly status_ends_with?: Scalars['String'] | null;
  readonly status_not_ends_with?: Scalars['String'] | null;
  readonly status_i?: Scalars['String'] | null;
  readonly status_not_i?: Scalars['String'] | null;
  readonly status_contains_i?: Scalars['String'] | null;
  readonly status_not_contains_i?: Scalars['String'] | null;
  readonly status_starts_with_i?: Scalars['String'] | null;
  readonly status_not_starts_with_i?: Scalars['String'] | null;
  readonly status_ends_with_i?: Scalars['String'] | null;
  readonly status_not_ends_with_i?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
};

export type ProductWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProductsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'photo_ASC'
  | 'photo_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'price_ASC'
  | 'price_DESC';

export type ProductUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly photo?: ProductImageRelateToOneInput | null;
  readonly status?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
};

export type ProductsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProductUpdateInput | null;
};

export type ProductCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly photo?: ProductImageRelateToOneInput | null;
  readonly status?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
};

export type ProductsCreateInput = {
  readonly data?: ProductCreateInput | null;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProverbWhereInput = {
  readonly AND?: ReadonlyArray<ProverbWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProverbWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly saying?: Scalars['String'] | null;
  readonly saying_not?: Scalars['String'] | null;
  readonly saying_contains?: Scalars['String'] | null;
  readonly saying_not_contains?: Scalars['String'] | null;
  readonly saying_starts_with?: Scalars['String'] | null;
  readonly saying_not_starts_with?: Scalars['String'] | null;
  readonly saying_ends_with?: Scalars['String'] | null;
  readonly saying_not_ends_with?: Scalars['String'] | null;
  readonly saying_i?: Scalars['String'] | null;
  readonly saying_not_i?: Scalars['String'] | null;
  readonly saying_contains_i?: Scalars['String'] | null;
  readonly saying_not_contains_i?: Scalars['String'] | null;
  readonly saying_starts_with_i?: Scalars['String'] | null;
  readonly saying_not_starts_with_i?: Scalars['String'] | null;
  readonly saying_ends_with_i?: Scalars['String'] | null;
  readonly saying_not_ends_with_i?: Scalars['String'] | null;
  readonly saying_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly saying_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly meaning?: Scalars['String'] | null;
  readonly meaning_not?: Scalars['String'] | null;
  readonly meaning_contains?: Scalars['String'] | null;
  readonly meaning_not_contains?: Scalars['String'] | null;
  readonly meaning_starts_with?: Scalars['String'] | null;
  readonly meaning_not_starts_with?: Scalars['String'] | null;
  readonly meaning_ends_with?: Scalars['String'] | null;
  readonly meaning_not_ends_with?: Scalars['String'] | null;
  readonly meaning_i?: Scalars['String'] | null;
  readonly meaning_not_i?: Scalars['String'] | null;
  readonly meaning_contains_i?: Scalars['String'] | null;
  readonly meaning_not_contains_i?: Scalars['String'] | null;
  readonly meaning_starts_with_i?: Scalars['String'] | null;
  readonly meaning_not_starts_with_i?: Scalars['String'] | null;
  readonly meaning_ends_with_i?: Scalars['String'] | null;
  readonly meaning_not_ends_with_i?: Scalars['String'] | null;
  readonly meaning_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly meaning_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly week?: Scalars['Int'] | null;
  readonly week_not?: Scalars['Int'] | null;
  readonly week_lt?: Scalars['Int'] | null;
  readonly week_lte?: Scalars['Int'] | null;
  readonly week_gt?: Scalars['Int'] | null;
  readonly week_gte?: Scalars['Int'] | null;
  readonly week_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly week_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly person?: UserWhereInput | null;
  readonly person_is_null?: Scalars['Boolean'] | null;
};

export type ProverbWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProverbsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'saying_ASC'
  | 'saying_DESC'
  | 'meaning_ASC'
  | 'meaning_DESC'
  | 'week_ASC'
  | 'week_DESC'
  | 'person_ASC'
  | 'person_DESC';

export type ProverbUpdateInput = {
  readonly saying?: Scalars['String'] | null;
  readonly meaning?: Scalars['String'] | null;
  readonly week?: Scalars['Int'] | null;
  readonly person?: UserRelateToOneInput | null;
};

export type ProverbsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProverbUpdateInput | null;
};

export type ProverbCreateInput = {
  readonly saying?: Scalars['String'] | null;
  readonly meaning?: Scalars['String'] | null;
  readonly week?: Scalars['Int'] | null;
  readonly person?: UserRelateToOneInput | null;
};

export type ProverbsCreateInput = {
  readonly data?: ProverbCreateInput | null;
};

export type UserRelateToManyInput = {
  readonly create?: ReadonlyArray<UserCreateInput | null> | null;
  readonly connect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ChoreRelateToManyInput = {
  readonly create?: ReadonlyArray<ChoreCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ChoreWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ChoreWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type HousingWhereInput = {
  readonly AND?: ReadonlyArray<HousingWhereInput | null> | null;
  readonly OR?: ReadonlyArray<HousingWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly owner?: UserWhereInput | null;
  readonly owner_is_null?: Scalars['Boolean'] | null;
  readonly members_every?: UserWhereInput | null;
  readonly members_some?: UserWhereInput | null;
  readonly members_none?: UserWhereInput | null;
  readonly chores_every?: ChoreWhereInput | null;
  readonly chores_some?: ChoreWhereInput | null;
  readonly chores_none?: ChoreWhereInput | null;
};

export type HousingWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortHousingsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'owner_ASC'
  | 'owner_DESC'
  | 'members_ASC'
  | 'members_DESC'
  | 'chores_ASC'
  | 'chores_DESC';

export type HousingUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly owner?: UserRelateToOneInput | null;
  readonly members?: UserRelateToManyInput | null;
  readonly chores?: ChoreRelateToManyInput | null;
};

export type HousingsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: HousingUpdateInput | null;
};

export type HousingCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly owner?: UserRelateToOneInput | null;
  readonly members?: UserRelateToManyInput | null;
  readonly chores?: ChoreRelateToManyInput | null;
};

export type HousingsCreateInput = {
  readonly data?: HousingCreateInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type ProductRelateToOneInput = {
  readonly create?: ProductCreateInput | null;
  readonly connect?: ProductWhereUniqueInput | null;
  readonly disconnect?: ProductWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProductImageWhereInput = {
  readonly AND?: ReadonlyArray<ProductImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProductImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly product?: ProductWhereInput | null;
  readonly product_is_null?: Scalars['Boolean'] | null;
};

export type ProductImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProductImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'product_ASC'
  | 'product_DESC';

export type ProductImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly product?: ProductRelateToOneInput | null;
};

export type ProductImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProductImageUpdateInput | null;
};

export type ProductImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly product?: ProductRelateToOneInput | null;
};

export type ProductImagesCreateInput = {
  readonly data?: ProductImageCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type PasswordResetRequestErrorCode =
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES';

export type PasswordResetRedemptionErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'TOKEN_NOT_SET'
  | 'TOKEN_MISMATCH'
  | 'TOKEN_EXPIRED'
  | 'TOKEN_REDEEMED';

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'choreDoneDate'
    | 'choreDoneCounter'
    | 'housingOwnerOf'
    | 'housingMemberOf'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly choreDoneDate?: Date | null;
    readonly choreDoneCounter?: number | null;
    readonly housingOwnerOf?: string | null;
    readonly housingMemberOf?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type ChoreListTypeInfo = {
  key: 'Chore';
  fields: 'id' | 'title' | 'description';
  backing: {
    readonly id: string;
    readonly title?: string | null;
    readonly description?: string | null;
  };
  inputs: {
    where: ChoreWhereInput;
    create: ChoreCreateInput;
    update: ChoreUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ChoreWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortChoresBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ChoreListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ChoreListTypeInfo,
    ChoreListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ChoreListTypeInfo,
  ChoreListTypeInfo['fields']
>;

export type ProductListTypeInfo = {
  key: 'Product';
  fields: 'id' | 'name' | 'description' | 'photo' | 'status' | 'price';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly photo?: string | null;
    readonly status?: string | null;
    readonly price?: number | null;
  };
  inputs: {
    where: ProductWhereInput;
    create: ProductCreateInput;
    update: ProductUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProductWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProductsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProductListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProductListTypeInfo,
    ProductListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProductListTypeInfo,
  ProductListTypeInfo['fields']
>;

export type ProverbListTypeInfo = {
  key: 'Proverb';
  fields: 'id' | 'saying' | 'meaning' | 'week' | 'person';
  backing: {
    readonly id: string;
    readonly saying?: string | null;
    readonly meaning?: string | null;
    readonly week?: number | null;
    readonly person?: string | null;
  };
  inputs: {
    where: ProverbWhereInput;
    create: ProverbCreateInput;
    update: ProverbUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProverbWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProverbsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProverbListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProverbListTypeInfo,
    ProverbListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProverbListTypeInfo,
  ProverbListTypeInfo['fields']
>;

export type HousingListTypeInfo = {
  key: 'Housing';
  fields: 'id' | 'name' | 'owner' | 'members' | 'chores';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly owner?: string | null;
    readonly members?: string | null;
    readonly chores?: string | null;
  };
  inputs: {
    where: HousingWhereInput;
    create: HousingCreateInput;
    update: HousingUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: HousingWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortHousingsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type HousingListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    HousingListTypeInfo,
    HousingListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  HousingListTypeInfo,
  HousingListTypeInfo['fields']
>;

export type ProductImageListTypeInfo = {
  key: 'ProductImage';
  fields: 'id' | 'image' | 'altText' | 'product';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly product?: string | null;
  };
  inputs: {
    where: ProductImageWhereInput;
    create: ProductImageCreateInput;
    update: ProductImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProductImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProductImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProductImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProductImageListTypeInfo,
    ProductImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProductImageListTypeInfo,
  ProductImageListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Chore: ChoreListTypeInfo;
  readonly Product: ProductListTypeInfo;
  readonly Proverb: ProverbListTypeInfo;
  readonly Housing: HousingListTypeInfo;
  readonly ProductImage: ProductImageListTypeInfo;
};
