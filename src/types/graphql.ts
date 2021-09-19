export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless?: Maybe<Scalars['Boolean']>;
  quality?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
};

export type AudioJson = Node & {
  __typename?: 'AudioJson';
  children: Array<Node>;
  fields?: Maybe<AudioJsonFields>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  source?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type AudioJsonConnection = {
  __typename?: 'AudioJsonConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<AudioJsonEdge>;
  group: Array<AudioJsonGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<AudioJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type AudioJsonConnectionDistinctArgs = {
  field: AudioJsonFieldsEnum;
};

export type AudioJsonConnectionGroupArgs = {
  field: AudioJsonFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type AudioJsonConnectionMaxArgs = {
  field: AudioJsonFieldsEnum;
};

export type AudioJsonConnectionMinArgs = {
  field: AudioJsonFieldsEnum;
};

export type AudioJsonConnectionSumArgs = {
  field: AudioJsonFieldsEnum;
};

export type AudioJsonEdge = {
  __typename?: 'AudioJsonEdge';
  next?: Maybe<AudioJson>;
  node: AudioJson;
  previous?: Maybe<AudioJson>;
};

export type AudioJsonFields = {
  __typename?: 'AudioJsonFields';
  collection?: Maybe<Scalars['String']>;
};

export enum AudioJsonFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FieldsCollection = 'fields___collection',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Source = 'source',
  Title = 'title',
  Url = 'url',
}

export type AudioJsonFieldsFilterInput = {
  collection?: Maybe<StringQueryOperatorInput>;
};

export type AudioJsonFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  fields?: Maybe<AudioJsonFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  source?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type AudioJsonFilterListInput = {
  elemMatch?: Maybe<AudioJsonFilterInput>;
};

export type AudioJsonGroupConnection = {
  __typename?: 'AudioJsonGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<AudioJsonEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<AudioJsonGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<AudioJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type AudioJsonGroupConnectionDistinctArgs = {
  field: AudioJsonFieldsEnum;
};

export type AudioJsonGroupConnectionGroupArgs = {
  field: AudioJsonFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type AudioJsonGroupConnectionMaxArgs = {
  field: AudioJsonFieldsEnum;
};

export type AudioJsonGroupConnectionMinArgs = {
  field: AudioJsonFieldsEnum;
};

export type AudioJsonGroupConnectionSumArgs = {
  field: AudioJsonFieldsEnum;
};

export type AudioJsonSortInput = {
  fields?: Maybe<Array<Maybe<AudioJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  ne?: Maybe<Scalars['Boolean']>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ClientsJson = Node & {
  __typename?: 'ClientsJson';
  children: Array<Node>;
  fields?: Maybe<ClientsJsonFields>;
  id: Scalars['ID'];
  internal: Internal;
  logo?: Maybe<File>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  url?: Maybe<Scalars['String']>;
};

export type ClientsJsonConnection = {
  __typename?: 'ClientsJsonConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ClientsJsonEdge>;
  group: Array<ClientsJsonGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ClientsJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ClientsJsonConnectionDistinctArgs = {
  field: ClientsJsonFieldsEnum;
};

export type ClientsJsonConnectionGroupArgs = {
  field: ClientsJsonFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ClientsJsonConnectionMaxArgs = {
  field: ClientsJsonFieldsEnum;
};

export type ClientsJsonConnectionMinArgs = {
  field: ClientsJsonFieldsEnum;
};

export type ClientsJsonConnectionSumArgs = {
  field: ClientsJsonFieldsEnum;
};

export type ClientsJsonEdge = {
  __typename?: 'ClientsJsonEdge';
  next?: Maybe<ClientsJson>;
  node: ClientsJson;
  previous?: Maybe<ClientsJson>;
};

export type ClientsJsonFields = {
  __typename?: 'ClientsJsonFields';
  collection?: Maybe<Scalars['String']>;
};

export enum ClientsJsonFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FieldsCollection = 'fields___collection',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  LogoAbsolutePath = 'logo___absolutePath',
  LogoAccessTime = 'logo___accessTime',
  LogoAtime = 'logo___atime',
  LogoAtimeMs = 'logo___atimeMs',
  LogoBase = 'logo___base',
  LogoBirthTime = 'logo___birthTime',
  LogoBirthtime = 'logo___birthtime',
  LogoBirthtimeMs = 'logo___birthtimeMs',
  LogoBlksize = 'logo___blksize',
  LogoBlocks = 'logo___blocks',
  LogoChangeTime = 'logo___changeTime',
  LogoChildAudioJsonChildren = 'logo___childAudioJson___children',
  LogoChildAudioJsonChildrenChildren = 'logo___childAudioJson___children___children',
  LogoChildAudioJsonChildrenId = 'logo___childAudioJson___children___id',
  LogoChildAudioJsonFieldsCollection = 'logo___childAudioJson___fields___collection',
  LogoChildAudioJsonId = 'logo___childAudioJson___id',
  LogoChildAudioJsonInternalContent = 'logo___childAudioJson___internal___content',
  LogoChildAudioJsonInternalContentDigest = 'logo___childAudioJson___internal___contentDigest',
  LogoChildAudioJsonInternalDescription = 'logo___childAudioJson___internal___description',
  LogoChildAudioJsonInternalFieldOwners = 'logo___childAudioJson___internal___fieldOwners',
  LogoChildAudioJsonInternalIgnoreType = 'logo___childAudioJson___internal___ignoreType',
  LogoChildAudioJsonInternalMediaType = 'logo___childAudioJson___internal___mediaType',
  LogoChildAudioJsonInternalOwner = 'logo___childAudioJson___internal___owner',
  LogoChildAudioJsonInternalType = 'logo___childAudioJson___internal___type',
  LogoChildAudioJsonParentChildren = 'logo___childAudioJson___parent___children',
  LogoChildAudioJsonParentId = 'logo___childAudioJson___parent___id',
  LogoChildAudioJsonSource = 'logo___childAudioJson___source',
  LogoChildAudioJsonTitle = 'logo___childAudioJson___title',
  LogoChildAudioJsonUrl = 'logo___childAudioJson___url',
  LogoChildClientsJsonChildren = 'logo___childClientsJson___children',
  LogoChildClientsJsonChildrenChildren = 'logo___childClientsJson___children___children',
  LogoChildClientsJsonChildrenId = 'logo___childClientsJson___children___id',
  LogoChildClientsJsonFieldsCollection = 'logo___childClientsJson___fields___collection',
  LogoChildClientsJsonId = 'logo___childClientsJson___id',
  LogoChildClientsJsonInternalContent = 'logo___childClientsJson___internal___content',
  LogoChildClientsJsonInternalContentDigest = 'logo___childClientsJson___internal___contentDigest',
  LogoChildClientsJsonInternalDescription = 'logo___childClientsJson___internal___description',
  LogoChildClientsJsonInternalFieldOwners = 'logo___childClientsJson___internal___fieldOwners',
  LogoChildClientsJsonInternalIgnoreType = 'logo___childClientsJson___internal___ignoreType',
  LogoChildClientsJsonInternalMediaType = 'logo___childClientsJson___internal___mediaType',
  LogoChildClientsJsonInternalOwner = 'logo___childClientsJson___internal___owner',
  LogoChildClientsJsonInternalType = 'logo___childClientsJson___internal___type',
  LogoChildClientsJsonLogoAbsolutePath = 'logo___childClientsJson___logo___absolutePath',
  LogoChildClientsJsonLogoAccessTime = 'logo___childClientsJson___logo___accessTime',
  LogoChildClientsJsonLogoAtime = 'logo___childClientsJson___logo___atime',
  LogoChildClientsJsonLogoAtimeMs = 'logo___childClientsJson___logo___atimeMs',
  LogoChildClientsJsonLogoBase = 'logo___childClientsJson___logo___base',
  LogoChildClientsJsonLogoBirthTime = 'logo___childClientsJson___logo___birthTime',
  LogoChildClientsJsonLogoBirthtime = 'logo___childClientsJson___logo___birthtime',
  LogoChildClientsJsonLogoBirthtimeMs = 'logo___childClientsJson___logo___birthtimeMs',
  LogoChildClientsJsonLogoBlksize = 'logo___childClientsJson___logo___blksize',
  LogoChildClientsJsonLogoBlocks = 'logo___childClientsJson___logo___blocks',
  LogoChildClientsJsonLogoChangeTime = 'logo___childClientsJson___logo___changeTime',
  LogoChildClientsJsonLogoChildren = 'logo___childClientsJson___logo___children',
  LogoChildClientsJsonLogoChildrenAudioJson = 'logo___childClientsJson___logo___childrenAudioJson',
  LogoChildClientsJsonLogoChildrenClientsJson = 'logo___childClientsJson___logo___childrenClientsJson',
  LogoChildClientsJsonLogoChildrenContentJson = 'logo___childClientsJson___logo___childrenContentJson',
  LogoChildClientsJsonLogoChildrenImageSharp = 'logo___childClientsJson___logo___childrenImageSharp',
  LogoChildClientsJsonLogoChildrenMarkdownRemark = 'logo___childClientsJson___logo___childrenMarkdownRemark',
  LogoChildClientsJsonLogoChildrenMdx = 'logo___childClientsJson___logo___childrenMdx',
  LogoChildClientsJsonLogoChildrenMediaJson = 'logo___childClientsJson___logo___childrenMediaJson',
  LogoChildClientsJsonLogoChildrenPrintJson = 'logo___childClientsJson___logo___childrenPrintJson',
  LogoChildClientsJsonLogoChildrenVideoJson = 'logo___childClientsJson___logo___childrenVideoJson',
  LogoChildClientsJsonLogoCtime = 'logo___childClientsJson___logo___ctime',
  LogoChildClientsJsonLogoCtimeMs = 'logo___childClientsJson___logo___ctimeMs',
  LogoChildClientsJsonLogoDev = 'logo___childClientsJson___logo___dev',
  LogoChildClientsJsonLogoDir = 'logo___childClientsJson___logo___dir',
  LogoChildClientsJsonLogoExt = 'logo___childClientsJson___logo___ext',
  LogoChildClientsJsonLogoExtension = 'logo___childClientsJson___logo___extension',
  LogoChildClientsJsonLogoGid = 'logo___childClientsJson___logo___gid',
  LogoChildClientsJsonLogoId = 'logo___childClientsJson___logo___id',
  LogoChildClientsJsonLogoIno = 'logo___childClientsJson___logo___ino',
  LogoChildClientsJsonLogoMode = 'logo___childClientsJson___logo___mode',
  LogoChildClientsJsonLogoModifiedTime = 'logo___childClientsJson___logo___modifiedTime',
  LogoChildClientsJsonLogoMtime = 'logo___childClientsJson___logo___mtime',
  LogoChildClientsJsonLogoMtimeMs = 'logo___childClientsJson___logo___mtimeMs',
  LogoChildClientsJsonLogoName = 'logo___childClientsJson___logo___name',
  LogoChildClientsJsonLogoNlink = 'logo___childClientsJson___logo___nlink',
  LogoChildClientsJsonLogoPrettySize = 'logo___childClientsJson___logo___prettySize',
  LogoChildClientsJsonLogoPublicUrl = 'logo___childClientsJson___logo___publicURL',
  LogoChildClientsJsonLogoRdev = 'logo___childClientsJson___logo___rdev',
  LogoChildClientsJsonLogoRelativeDirectory = 'logo___childClientsJson___logo___relativeDirectory',
  LogoChildClientsJsonLogoRelativePath = 'logo___childClientsJson___logo___relativePath',
  LogoChildClientsJsonLogoRoot = 'logo___childClientsJson___logo___root',
  LogoChildClientsJsonLogoSize = 'logo___childClientsJson___logo___size',
  LogoChildClientsJsonLogoSourceInstanceName = 'logo___childClientsJson___logo___sourceInstanceName',
  LogoChildClientsJsonLogoUid = 'logo___childClientsJson___logo___uid',
  LogoChildClientsJsonName = 'logo___childClientsJson___name',
  LogoChildClientsJsonParentChildren = 'logo___childClientsJson___parent___children',
  LogoChildClientsJsonParentId = 'logo___childClientsJson___parent___id',
  LogoChildClientsJsonUrl = 'logo___childClientsJson___url',
  LogoChildContentJsonChildren = 'logo___childContentJson___children',
  LogoChildContentJsonChildrenChildren = 'logo___childContentJson___children___children',
  LogoChildContentJsonChildrenId = 'logo___childContentJson___children___id',
  LogoChildContentJsonConferenceParticipationConferencesOrganized = 'logo___childContentJson___conferenceParticipation___conferencesOrganized',
  LogoChildContentJsonConferenceParticipationPanelsOrganized = 'logo___childContentJson___conferenceParticipation___panelsOrganized',
  LogoChildContentJsonConferenceParticipationPapersPresented = 'logo___childContentJson___conferenceParticipation___papersPresented',
  LogoChildContentJsonDepartmentalAndUniversityService = 'logo___childContentJson___departmentalAndUniversityService',
  LogoChildContentJsonDepartmentalAndUniversityServiceDate = 'logo___childContentJson___departmentalAndUniversityService___date',
  LogoChildContentJsonDepartmentalAndUniversityServiceTitle = 'logo___childContentJson___departmentalAndUniversityService___title',
  LogoChildContentJsonEducation = 'logo___childContentJson___education',
  LogoChildContentJsonEducationDegree = 'logo___childContentJson___education___degree',
  LogoChildContentJsonEducationSource = 'logo___childContentJson___education___source',
  LogoChildContentJsonEducationUrl = 'logo___childContentJson___education___url',
  LogoChildContentJsonEducationYear = 'logo___childContentJson___education___year',
  LogoChildContentJsonFieldsCollection = 'logo___childContentJson___fields___collection',
  LogoChildContentJsonGrantsAndFellowships = 'logo___childContentJson___grantsAndFellowships',
  LogoChildContentJsonGrantsAndFellowshipsDate = 'logo___childContentJson___grantsAndFellowships___date',
  LogoChildContentJsonGrantsAndFellowshipsTitle = 'logo___childContentJson___grantsAndFellowships___title',
  LogoChildContentJsonId = 'logo___childContentJson___id',
  LogoChildContentJsonInternalContent = 'logo___childContentJson___internal___content',
  LogoChildContentJsonInternalContentDigest = 'logo___childContentJson___internal___contentDigest',
  LogoChildContentJsonInternalDescription = 'logo___childContentJson___internal___description',
  LogoChildContentJsonInternalFieldOwners = 'logo___childContentJson___internal___fieldOwners',
  LogoChildContentJsonInternalIgnoreType = 'logo___childContentJson___internal___ignoreType',
  LogoChildContentJsonInternalMediaType = 'logo___childContentJson___internal___mediaType',
  LogoChildContentJsonInternalOwner = 'logo___childContentJson___internal___owner',
  LogoChildContentJsonInternalType = 'logo___childContentJson___internal___type',
  LogoChildContentJsonInvitedTalks = 'logo___childContentJson___invitedTalks',
  LogoChildContentJsonInvitedTalksAuthors = 'logo___childContentJson___invitedTalks___authors',
  LogoChildContentJsonInvitedTalksDate = 'logo___childContentJson___invitedTalks___date',
  LogoChildContentJsonInvitedTalksExtra = 'logo___childContentJson___invitedTalks___extra',
  LogoChildContentJsonInvitedTalksLocation = 'logo___childContentJson___invitedTalks___location',
  LogoChildContentJsonInvitedTalksTitle = 'logo___childContentJson___invitedTalks___title',
  LogoChildContentJsonInvitedTalksUrl = 'logo___childContentJson___invitedTalks___url',
  LogoChildContentJsonParentChildren = 'logo___childContentJson___parent___children',
  LogoChildContentJsonParentId = 'logo___childContentJson___parent___id',
  LogoChildContentJsonProfessionalAppointments = 'logo___childContentJson___professionalAppointments',
  LogoChildContentJsonProfessionalAppointmentsDate = 'logo___childContentJson___professionalAppointments___date',
  LogoChildContentJsonProfessionalAppointmentsTitle = 'logo___childContentJson___professionalAppointments___title',
  LogoChildContentJsonProfessionalMemberships = 'logo___childContentJson___professionalMemberships',
  LogoChildContentJsonProfessionalMembershipsDate = 'logo___childContentJson___professionalMemberships___date',
  LogoChildContentJsonProfessionalMembershipsTitle = 'logo___childContentJson___professionalMemberships___title',
  LogoChildContentJsonProfessionalMembershipsUrl = 'logo___childContentJson___professionalMemberships___url',
  LogoChildContentJsonPublicationsBookChapters = 'logo___childContentJson___publications___bookChapters',
  LogoChildContentJsonPublicationsBooks = 'logo___childContentJson___publications___books',
  LogoChildContentJsonPublicationsConferenceProceedings = 'logo___childContentJson___publications___conferenceProceedings',
  LogoChildContentJsonPublicationsEditedVolumes = 'logo___childContentJson___publications___editedVolumes',
  LogoChildContentJsonPublicationsOtherPublications = 'logo___childContentJson___publications___otherPublications',
  LogoChildContentJsonPublicationsRefereedJournalArticles = 'logo___childContentJson___publications___refereedJournalArticles',
  LogoChildContentJsonReferences = 'logo___childContentJson___references',
  LogoChildContentJsonReferencesReference = 'logo___childContentJson___references___reference',
  LogoChildContentJsonReviewingExperience = 'logo___childContentJson___reviewingExperience',
  LogoChildContentJsonReviewingExperienceDate = 'logo___childContentJson___reviewingExperience___date',
  LogoChildContentJsonReviewingExperienceTitle = 'logo___childContentJson___reviewingExperience___title',
  LogoChildContentJsonSelectedPressAndMedia = 'logo___childContentJson___selectedPressAndMedia',
  LogoChildContentJsonSelectedPressAndMediaAuthors = 'logo___childContentJson___selectedPressAndMedia___authors',
  LogoChildContentJsonSelectedPressAndMediaDate = 'logo___childContentJson___selectedPressAndMedia___date',
  LogoChildContentJsonSelectedPressAndMediaFormattedSource = 'logo___childContentJson___selectedPressAndMedia___formattedSource',
  LogoChildContentJsonSelectedPressAndMediaSource = 'logo___childContentJson___selectedPressAndMedia___source',
  LogoChildContentJsonSelectedPressAndMediaTitle = 'logo___childContentJson___selectedPressAndMedia___title',
  LogoChildContentJsonSelectedPressAndMediaUrl = 'logo___childContentJson___selectedPressAndMedia___url',
  LogoChildContentJsonServiceToProfession = 'logo___childContentJson___serviceToProfession',
  LogoChildContentJsonServiceToProfessionDate = 'logo___childContentJson___serviceToProfession___date',
  LogoChildContentJsonServiceToProfessionTitle = 'logo___childContentJson___serviceToProfession___title',
  LogoChildContentJsonTeachingAndSupervisionExperience = 'logo___childContentJson___teachingAndSupervisionExperience',
  LogoChildContentJsonTeachingAndSupervisionExperienceCourses = 'logo___childContentJson___teachingAndSupervisionExperience___courses',
  LogoChildContentJsonTeachingAndSupervisionExperienceLocation = 'logo___childContentJson___teachingAndSupervisionExperience___location',
  LogoChildImageSharpChildren = 'logo___childImageSharp___children',
  LogoChildImageSharpChildrenChildren = 'logo___childImageSharp___children___children',
  LogoChildImageSharpChildrenId = 'logo___childImageSharp___children___id',
  LogoChildImageSharpFieldsCollection = 'logo___childImageSharp___fields___collection',
  LogoChildImageSharpFixedAspectRatio = 'logo___childImageSharp___fixed___aspectRatio',
  LogoChildImageSharpFixedBase64 = 'logo___childImageSharp___fixed___base64',
  LogoChildImageSharpFixedHeight = 'logo___childImageSharp___fixed___height',
  LogoChildImageSharpFixedOriginalName = 'logo___childImageSharp___fixed___originalName',
  LogoChildImageSharpFixedSrc = 'logo___childImageSharp___fixed___src',
  LogoChildImageSharpFixedSrcSet = 'logo___childImageSharp___fixed___srcSet',
  LogoChildImageSharpFixedSrcSetWebp = 'logo___childImageSharp___fixed___srcSetWebp',
  LogoChildImageSharpFixedSrcWebp = 'logo___childImageSharp___fixed___srcWebp',
  LogoChildImageSharpFixedTracedSvg = 'logo___childImageSharp___fixed___tracedSVG',
  LogoChildImageSharpFixedWidth = 'logo___childImageSharp___fixed___width',
  LogoChildImageSharpFluidAspectRatio = 'logo___childImageSharp___fluid___aspectRatio',
  LogoChildImageSharpFluidBase64 = 'logo___childImageSharp___fluid___base64',
  LogoChildImageSharpFluidOriginalImg = 'logo___childImageSharp___fluid___originalImg',
  LogoChildImageSharpFluidOriginalName = 'logo___childImageSharp___fluid___originalName',
  LogoChildImageSharpFluidPresentationHeight = 'logo___childImageSharp___fluid___presentationHeight',
  LogoChildImageSharpFluidPresentationWidth = 'logo___childImageSharp___fluid___presentationWidth',
  LogoChildImageSharpFluidSizes = 'logo___childImageSharp___fluid___sizes',
  LogoChildImageSharpFluidSrc = 'logo___childImageSharp___fluid___src',
  LogoChildImageSharpFluidSrcSet = 'logo___childImageSharp___fluid___srcSet',
  LogoChildImageSharpFluidSrcSetWebp = 'logo___childImageSharp___fluid___srcSetWebp',
  LogoChildImageSharpFluidSrcWebp = 'logo___childImageSharp___fluid___srcWebp',
  LogoChildImageSharpFluidTracedSvg = 'logo___childImageSharp___fluid___tracedSVG',
  LogoChildImageSharpGatsbyImageData = 'logo___childImageSharp___gatsbyImageData',
  LogoChildImageSharpId = 'logo___childImageSharp___id',
  LogoChildImageSharpInternalContent = 'logo___childImageSharp___internal___content',
  LogoChildImageSharpInternalContentDigest = 'logo___childImageSharp___internal___contentDigest',
  LogoChildImageSharpInternalDescription = 'logo___childImageSharp___internal___description',
  LogoChildImageSharpInternalFieldOwners = 'logo___childImageSharp___internal___fieldOwners',
  LogoChildImageSharpInternalIgnoreType = 'logo___childImageSharp___internal___ignoreType',
  LogoChildImageSharpInternalMediaType = 'logo___childImageSharp___internal___mediaType',
  LogoChildImageSharpInternalOwner = 'logo___childImageSharp___internal___owner',
  LogoChildImageSharpInternalType = 'logo___childImageSharp___internal___type',
  LogoChildImageSharpOriginalHeight = 'logo___childImageSharp___original___height',
  LogoChildImageSharpOriginalSrc = 'logo___childImageSharp___original___src',
  LogoChildImageSharpOriginalWidth = 'logo___childImageSharp___original___width',
  LogoChildImageSharpParentChildren = 'logo___childImageSharp___parent___children',
  LogoChildImageSharpParentId = 'logo___childImageSharp___parent___id',
  LogoChildImageSharpResizeAspectRatio = 'logo___childImageSharp___resize___aspectRatio',
  LogoChildImageSharpResizeHeight = 'logo___childImageSharp___resize___height',
  LogoChildImageSharpResizeOriginalName = 'logo___childImageSharp___resize___originalName',
  LogoChildImageSharpResizeSrc = 'logo___childImageSharp___resize___src',
  LogoChildImageSharpResizeTracedSvg = 'logo___childImageSharp___resize___tracedSVG',
  LogoChildImageSharpResizeWidth = 'logo___childImageSharp___resize___width',
  LogoChildMarkdownRemarkChildren = 'logo___childMarkdownRemark___children',
  LogoChildMarkdownRemarkChildrenChildren = 'logo___childMarkdownRemark___children___children',
  LogoChildMarkdownRemarkChildrenId = 'logo___childMarkdownRemark___children___id',
  LogoChildMarkdownRemarkExcerpt = 'logo___childMarkdownRemark___excerpt',
  LogoChildMarkdownRemarkExcerptAst = 'logo___childMarkdownRemark___excerptAst',
  LogoChildMarkdownRemarkFieldsCollection = 'logo___childMarkdownRemark___fields___collection',
  LogoChildMarkdownRemarkFieldsPath = 'logo___childMarkdownRemark___fields___path',
  LogoChildMarkdownRemarkFieldsSlug = 'logo___childMarkdownRemark___fields___slug',
  LogoChildMarkdownRemarkFieldsTags = 'logo___childMarkdownRemark___fields___tags',
  LogoChildMarkdownRemarkFileAbsolutePath = 'logo___childMarkdownRemark___fileAbsolutePath',
  LogoChildMarkdownRemarkFrontmatterCategory = 'logo___childMarkdownRemark___frontmatter___category',
  LogoChildMarkdownRemarkFrontmatterDate = 'logo___childMarkdownRemark___frontmatter___date',
  LogoChildMarkdownRemarkFrontmatterIsbn10 = 'logo___childMarkdownRemark___frontmatter___isbn10',
  LogoChildMarkdownRemarkFrontmatterIsbn13 = 'logo___childMarkdownRemark___frontmatter___isbn13',
  LogoChildMarkdownRemarkFrontmatterLayout = 'logo___childMarkdownRemark___frontmatter___layout',
  LogoChildMarkdownRemarkFrontmatterReviews = 'logo___childMarkdownRemark___frontmatter___reviews',
  LogoChildMarkdownRemarkFrontmatterSubtitle = 'logo___childMarkdownRemark___frontmatter___subtitle',
  LogoChildMarkdownRemarkFrontmatterTags = 'logo___childMarkdownRemark___frontmatter___tags',
  LogoChildMarkdownRemarkFrontmatterTitle = 'logo___childMarkdownRemark___frontmatter___title',
  LogoChildMarkdownRemarkHeadings = 'logo___childMarkdownRemark___headings',
  LogoChildMarkdownRemarkHeadingsDepth = 'logo___childMarkdownRemark___headings___depth',
  LogoChildMarkdownRemarkHeadingsId = 'logo___childMarkdownRemark___headings___id',
  LogoChildMarkdownRemarkHeadingsValue = 'logo___childMarkdownRemark___headings___value',
  LogoChildMarkdownRemarkHtml = 'logo___childMarkdownRemark___html',
  LogoChildMarkdownRemarkHtmlAst = 'logo___childMarkdownRemark___htmlAst',
  LogoChildMarkdownRemarkId = 'logo___childMarkdownRemark___id',
  LogoChildMarkdownRemarkInternalContent = 'logo___childMarkdownRemark___internal___content',
  LogoChildMarkdownRemarkInternalContentDigest = 'logo___childMarkdownRemark___internal___contentDigest',
  LogoChildMarkdownRemarkInternalDescription = 'logo___childMarkdownRemark___internal___description',
  LogoChildMarkdownRemarkInternalFieldOwners = 'logo___childMarkdownRemark___internal___fieldOwners',
  LogoChildMarkdownRemarkInternalIgnoreType = 'logo___childMarkdownRemark___internal___ignoreType',
  LogoChildMarkdownRemarkInternalMediaType = 'logo___childMarkdownRemark___internal___mediaType',
  LogoChildMarkdownRemarkInternalOwner = 'logo___childMarkdownRemark___internal___owner',
  LogoChildMarkdownRemarkInternalType = 'logo___childMarkdownRemark___internal___type',
  LogoChildMarkdownRemarkParentChildren = 'logo___childMarkdownRemark___parent___children',
  LogoChildMarkdownRemarkParentId = 'logo___childMarkdownRemark___parent___id',
  LogoChildMarkdownRemarkRawMarkdownBody = 'logo___childMarkdownRemark___rawMarkdownBody',
  LogoChildMarkdownRemarkTableOfContents = 'logo___childMarkdownRemark___tableOfContents',
  LogoChildMarkdownRemarkTimeToRead = 'logo___childMarkdownRemark___timeToRead',
  LogoChildMarkdownRemarkWordCountParagraphs = 'logo___childMarkdownRemark___wordCount___paragraphs',
  LogoChildMarkdownRemarkWordCountSentences = 'logo___childMarkdownRemark___wordCount___sentences',
  LogoChildMarkdownRemarkWordCountWords = 'logo___childMarkdownRemark___wordCount___words',
  LogoChildMdxBody = 'logo___childMdx___body',
  LogoChildMdxChildren = 'logo___childMdx___children',
  LogoChildMdxChildrenChildren = 'logo___childMdx___children___children',
  LogoChildMdxChildrenId = 'logo___childMdx___children___id',
  LogoChildMdxExcerpt = 'logo___childMdx___excerpt',
  LogoChildMdxFieldsCollection = 'logo___childMdx___fields___collection',
  LogoChildMdxFieldsSlug = 'logo___childMdx___fields___slug',
  LogoChildMdxFileAbsolutePath = 'logo___childMdx___fileAbsolutePath',
  LogoChildMdxFrontmatterTitle = 'logo___childMdx___frontmatter___title',
  LogoChildMdxHeadings = 'logo___childMdx___headings',
  LogoChildMdxHeadingsDepth = 'logo___childMdx___headings___depth',
  LogoChildMdxHeadingsValue = 'logo___childMdx___headings___value',
  LogoChildMdxHtml = 'logo___childMdx___html',
  LogoChildMdxId = 'logo___childMdx___id',
  LogoChildMdxInternalContent = 'logo___childMdx___internal___content',
  LogoChildMdxInternalContentDigest = 'logo___childMdx___internal___contentDigest',
  LogoChildMdxInternalDescription = 'logo___childMdx___internal___description',
  LogoChildMdxInternalFieldOwners = 'logo___childMdx___internal___fieldOwners',
  LogoChildMdxInternalIgnoreType = 'logo___childMdx___internal___ignoreType',
  LogoChildMdxInternalMediaType = 'logo___childMdx___internal___mediaType',
  LogoChildMdxInternalOwner = 'logo___childMdx___internal___owner',
  LogoChildMdxInternalType = 'logo___childMdx___internal___type',
  LogoChildMdxMdxAst = 'logo___childMdx___mdxAST',
  LogoChildMdxParentChildren = 'logo___childMdx___parent___children',
  LogoChildMdxParentId = 'logo___childMdx___parent___id',
  LogoChildMdxRawBody = 'logo___childMdx___rawBody',
  LogoChildMdxSlug = 'logo___childMdx___slug',
  LogoChildMdxTableOfContents = 'logo___childMdx___tableOfContents',
  LogoChildMdxTimeToRead = 'logo___childMdx___timeToRead',
  LogoChildMdxWordCountParagraphs = 'logo___childMdx___wordCount___paragraphs',
  LogoChildMdxWordCountSentences = 'logo___childMdx___wordCount___sentences',
  LogoChildMdxWordCountWords = 'logo___childMdx___wordCount___words',
  LogoChildMediaJsonChildren = 'logo___childMediaJson___children',
  LogoChildMediaJsonChildrenChildren = 'logo___childMediaJson___children___children',
  LogoChildMediaJsonChildrenId = 'logo___childMediaJson___children___id',
  LogoChildMediaJsonFieldsCollection = 'logo___childMediaJson___fields___collection',
  LogoChildMediaJsonId = 'logo___childMediaJson___id',
  LogoChildMediaJsonInternalContent = 'logo___childMediaJson___internal___content',
  LogoChildMediaJsonInternalContentDigest = 'logo___childMediaJson___internal___contentDigest',
  LogoChildMediaJsonInternalDescription = 'logo___childMediaJson___internal___description',
  LogoChildMediaJsonInternalFieldOwners = 'logo___childMediaJson___internal___fieldOwners',
  LogoChildMediaJsonInternalIgnoreType = 'logo___childMediaJson___internal___ignoreType',
  LogoChildMediaJsonInternalMediaType = 'logo___childMediaJson___internal___mediaType',
  LogoChildMediaJsonInternalOwner = 'logo___childMediaJson___internal___owner',
  LogoChildMediaJsonInternalType = 'logo___childMediaJson___internal___type',
  LogoChildMediaJsonLogoAbsolutePath = 'logo___childMediaJson___logo___absolutePath',
  LogoChildMediaJsonLogoAccessTime = 'logo___childMediaJson___logo___accessTime',
  LogoChildMediaJsonLogoAtime = 'logo___childMediaJson___logo___atime',
  LogoChildMediaJsonLogoAtimeMs = 'logo___childMediaJson___logo___atimeMs',
  LogoChildMediaJsonLogoBase = 'logo___childMediaJson___logo___base',
  LogoChildMediaJsonLogoBirthTime = 'logo___childMediaJson___logo___birthTime',
  LogoChildMediaJsonLogoBirthtime = 'logo___childMediaJson___logo___birthtime',
  LogoChildMediaJsonLogoBirthtimeMs = 'logo___childMediaJson___logo___birthtimeMs',
  LogoChildMediaJsonLogoBlksize = 'logo___childMediaJson___logo___blksize',
  LogoChildMediaJsonLogoBlocks = 'logo___childMediaJson___logo___blocks',
  LogoChildMediaJsonLogoChangeTime = 'logo___childMediaJson___logo___changeTime',
  LogoChildMediaJsonLogoChildren = 'logo___childMediaJson___logo___children',
  LogoChildMediaJsonLogoChildrenAudioJson = 'logo___childMediaJson___logo___childrenAudioJson',
  LogoChildMediaJsonLogoChildrenClientsJson = 'logo___childMediaJson___logo___childrenClientsJson',
  LogoChildMediaJsonLogoChildrenContentJson = 'logo___childMediaJson___logo___childrenContentJson',
  LogoChildMediaJsonLogoChildrenImageSharp = 'logo___childMediaJson___logo___childrenImageSharp',
  LogoChildMediaJsonLogoChildrenMarkdownRemark = 'logo___childMediaJson___logo___childrenMarkdownRemark',
  LogoChildMediaJsonLogoChildrenMdx = 'logo___childMediaJson___logo___childrenMdx',
  LogoChildMediaJsonLogoChildrenMediaJson = 'logo___childMediaJson___logo___childrenMediaJson',
  LogoChildMediaJsonLogoChildrenPrintJson = 'logo___childMediaJson___logo___childrenPrintJson',
  LogoChildMediaJsonLogoChildrenVideoJson = 'logo___childMediaJson___logo___childrenVideoJson',
  LogoChildMediaJsonLogoCtime = 'logo___childMediaJson___logo___ctime',
  LogoChildMediaJsonLogoCtimeMs = 'logo___childMediaJson___logo___ctimeMs',
  LogoChildMediaJsonLogoDev = 'logo___childMediaJson___logo___dev',
  LogoChildMediaJsonLogoDir = 'logo___childMediaJson___logo___dir',
  LogoChildMediaJsonLogoExt = 'logo___childMediaJson___logo___ext',
  LogoChildMediaJsonLogoExtension = 'logo___childMediaJson___logo___extension',
  LogoChildMediaJsonLogoGid = 'logo___childMediaJson___logo___gid',
  LogoChildMediaJsonLogoId = 'logo___childMediaJson___logo___id',
  LogoChildMediaJsonLogoIno = 'logo___childMediaJson___logo___ino',
  LogoChildMediaJsonLogoMode = 'logo___childMediaJson___logo___mode',
  LogoChildMediaJsonLogoModifiedTime = 'logo___childMediaJson___logo___modifiedTime',
  LogoChildMediaJsonLogoMtime = 'logo___childMediaJson___logo___mtime',
  LogoChildMediaJsonLogoMtimeMs = 'logo___childMediaJson___logo___mtimeMs',
  LogoChildMediaJsonLogoName = 'logo___childMediaJson___logo___name',
  LogoChildMediaJsonLogoNlink = 'logo___childMediaJson___logo___nlink',
  LogoChildMediaJsonLogoPrettySize = 'logo___childMediaJson___logo___prettySize',
  LogoChildMediaJsonLogoPublicUrl = 'logo___childMediaJson___logo___publicURL',
  LogoChildMediaJsonLogoRdev = 'logo___childMediaJson___logo___rdev',
  LogoChildMediaJsonLogoRelativeDirectory = 'logo___childMediaJson___logo___relativeDirectory',
  LogoChildMediaJsonLogoRelativePath = 'logo___childMediaJson___logo___relativePath',
  LogoChildMediaJsonLogoRoot = 'logo___childMediaJson___logo___root',
  LogoChildMediaJsonLogoSize = 'logo___childMediaJson___logo___size',
  LogoChildMediaJsonLogoSourceInstanceName = 'logo___childMediaJson___logo___sourceInstanceName',
  LogoChildMediaJsonLogoUid = 'logo___childMediaJson___logo___uid',
  LogoChildMediaJsonName = 'logo___childMediaJson___name',
  LogoChildMediaJsonParentChildren = 'logo___childMediaJson___parent___children',
  LogoChildMediaJsonParentId = 'logo___childMediaJson___parent___id',
  LogoChildMediaJsonUrl = 'logo___childMediaJson___url',
  LogoChildPrintJsonChildren = 'logo___childPrintJson___children',
  LogoChildPrintJsonChildrenChildren = 'logo___childPrintJson___children___children',
  LogoChildPrintJsonChildrenId = 'logo___childPrintJson___children___id',
  LogoChildPrintJsonFieldsCollection = 'logo___childPrintJson___fields___collection',
  LogoChildPrintJsonId = 'logo___childPrintJson___id',
  LogoChildPrintJsonInternalContent = 'logo___childPrintJson___internal___content',
  LogoChildPrintJsonInternalContentDigest = 'logo___childPrintJson___internal___contentDigest',
  LogoChildPrintJsonInternalDescription = 'logo___childPrintJson___internal___description',
  LogoChildPrintJsonInternalFieldOwners = 'logo___childPrintJson___internal___fieldOwners',
  LogoChildPrintJsonInternalIgnoreType = 'logo___childPrintJson___internal___ignoreType',
  LogoChildPrintJsonInternalMediaType = 'logo___childPrintJson___internal___mediaType',
  LogoChildPrintJsonInternalOwner = 'logo___childPrintJson___internal___owner',
  LogoChildPrintJsonInternalType = 'logo___childPrintJson___internal___type',
  LogoChildPrintJsonParentChildren = 'logo___childPrintJson___parent___children',
  LogoChildPrintJsonParentId = 'logo___childPrintJson___parent___id',
  LogoChildPrintJsonSource = 'logo___childPrintJson___source',
  LogoChildPrintJsonThumbnail = 'logo___childPrintJson___thumbnail',
  LogoChildPrintJsonTitle = 'logo___childPrintJson___title',
  LogoChildPrintJsonUrl = 'logo___childPrintJson___url',
  LogoChildVideoJsonChildren = 'logo___childVideoJson___children',
  LogoChildVideoJsonChildrenChildren = 'logo___childVideoJson___children___children',
  LogoChildVideoJsonChildrenId = 'logo___childVideoJson___children___id',
  LogoChildVideoJsonFieldsCollection = 'logo___childVideoJson___fields___collection',
  LogoChildVideoJsonId = 'logo___childVideoJson___id',
  LogoChildVideoJsonInternalContent = 'logo___childVideoJson___internal___content',
  LogoChildVideoJsonInternalContentDigest = 'logo___childVideoJson___internal___contentDigest',
  LogoChildVideoJsonInternalDescription = 'logo___childVideoJson___internal___description',
  LogoChildVideoJsonInternalFieldOwners = 'logo___childVideoJson___internal___fieldOwners',
  LogoChildVideoJsonInternalIgnoreType = 'logo___childVideoJson___internal___ignoreType',
  LogoChildVideoJsonInternalMediaType = 'logo___childVideoJson___internal___mediaType',
  LogoChildVideoJsonInternalOwner = 'logo___childVideoJson___internal___owner',
  LogoChildVideoJsonInternalType = 'logo___childVideoJson___internal___type',
  LogoChildVideoJsonParentChildren = 'logo___childVideoJson___parent___children',
  LogoChildVideoJsonParentId = 'logo___childVideoJson___parent___id',
  LogoChildVideoJsonSource = 'logo___childVideoJson___source',
  LogoChildVideoJsonTitle = 'logo___childVideoJson___title',
  LogoChildVideoJsonUrl = 'logo___childVideoJson___url',
  LogoChildren = 'logo___children',
  LogoChildrenAudioJson = 'logo___childrenAudioJson',
  LogoChildrenAudioJsonChildren = 'logo___childrenAudioJson___children',
  LogoChildrenAudioJsonChildrenChildren = 'logo___childrenAudioJson___children___children',
  LogoChildrenAudioJsonChildrenId = 'logo___childrenAudioJson___children___id',
  LogoChildrenAudioJsonFieldsCollection = 'logo___childrenAudioJson___fields___collection',
  LogoChildrenAudioJsonId = 'logo___childrenAudioJson___id',
  LogoChildrenAudioJsonInternalContent = 'logo___childrenAudioJson___internal___content',
  LogoChildrenAudioJsonInternalContentDigest = 'logo___childrenAudioJson___internal___contentDigest',
  LogoChildrenAudioJsonInternalDescription = 'logo___childrenAudioJson___internal___description',
  LogoChildrenAudioJsonInternalFieldOwners = 'logo___childrenAudioJson___internal___fieldOwners',
  LogoChildrenAudioJsonInternalIgnoreType = 'logo___childrenAudioJson___internal___ignoreType',
  LogoChildrenAudioJsonInternalMediaType = 'logo___childrenAudioJson___internal___mediaType',
  LogoChildrenAudioJsonInternalOwner = 'logo___childrenAudioJson___internal___owner',
  LogoChildrenAudioJsonInternalType = 'logo___childrenAudioJson___internal___type',
  LogoChildrenAudioJsonParentChildren = 'logo___childrenAudioJson___parent___children',
  LogoChildrenAudioJsonParentId = 'logo___childrenAudioJson___parent___id',
  LogoChildrenAudioJsonSource = 'logo___childrenAudioJson___source',
  LogoChildrenAudioJsonTitle = 'logo___childrenAudioJson___title',
  LogoChildrenAudioJsonUrl = 'logo___childrenAudioJson___url',
  LogoChildrenClientsJson = 'logo___childrenClientsJson',
  LogoChildrenClientsJsonChildren = 'logo___childrenClientsJson___children',
  LogoChildrenClientsJsonChildrenChildren = 'logo___childrenClientsJson___children___children',
  LogoChildrenClientsJsonChildrenId = 'logo___childrenClientsJson___children___id',
  LogoChildrenClientsJsonFieldsCollection = 'logo___childrenClientsJson___fields___collection',
  LogoChildrenClientsJsonId = 'logo___childrenClientsJson___id',
  LogoChildrenClientsJsonInternalContent = 'logo___childrenClientsJson___internal___content',
  LogoChildrenClientsJsonInternalContentDigest = 'logo___childrenClientsJson___internal___contentDigest',
  LogoChildrenClientsJsonInternalDescription = 'logo___childrenClientsJson___internal___description',
  LogoChildrenClientsJsonInternalFieldOwners = 'logo___childrenClientsJson___internal___fieldOwners',
  LogoChildrenClientsJsonInternalIgnoreType = 'logo___childrenClientsJson___internal___ignoreType',
  LogoChildrenClientsJsonInternalMediaType = 'logo___childrenClientsJson___internal___mediaType',
  LogoChildrenClientsJsonInternalOwner = 'logo___childrenClientsJson___internal___owner',
  LogoChildrenClientsJsonInternalType = 'logo___childrenClientsJson___internal___type',
  LogoChildrenClientsJsonLogoAbsolutePath = 'logo___childrenClientsJson___logo___absolutePath',
  LogoChildrenClientsJsonLogoAccessTime = 'logo___childrenClientsJson___logo___accessTime',
  LogoChildrenClientsJsonLogoAtime = 'logo___childrenClientsJson___logo___atime',
  LogoChildrenClientsJsonLogoAtimeMs = 'logo___childrenClientsJson___logo___atimeMs',
  LogoChildrenClientsJsonLogoBase = 'logo___childrenClientsJson___logo___base',
  LogoChildrenClientsJsonLogoBirthTime = 'logo___childrenClientsJson___logo___birthTime',
  LogoChildrenClientsJsonLogoBirthtime = 'logo___childrenClientsJson___logo___birthtime',
  LogoChildrenClientsJsonLogoBirthtimeMs = 'logo___childrenClientsJson___logo___birthtimeMs',
  LogoChildrenClientsJsonLogoBlksize = 'logo___childrenClientsJson___logo___blksize',
  LogoChildrenClientsJsonLogoBlocks = 'logo___childrenClientsJson___logo___blocks',
  LogoChildrenClientsJsonLogoChangeTime = 'logo___childrenClientsJson___logo___changeTime',
  LogoChildrenClientsJsonLogoChildren = 'logo___childrenClientsJson___logo___children',
  LogoChildrenClientsJsonLogoChildrenAudioJson = 'logo___childrenClientsJson___logo___childrenAudioJson',
  LogoChildrenClientsJsonLogoChildrenClientsJson = 'logo___childrenClientsJson___logo___childrenClientsJson',
  LogoChildrenClientsJsonLogoChildrenContentJson = 'logo___childrenClientsJson___logo___childrenContentJson',
  LogoChildrenClientsJsonLogoChildrenImageSharp = 'logo___childrenClientsJson___logo___childrenImageSharp',
  LogoChildrenClientsJsonLogoChildrenMarkdownRemark = 'logo___childrenClientsJson___logo___childrenMarkdownRemark',
  LogoChildrenClientsJsonLogoChildrenMdx = 'logo___childrenClientsJson___logo___childrenMdx',
  LogoChildrenClientsJsonLogoChildrenMediaJson = 'logo___childrenClientsJson___logo___childrenMediaJson',
  LogoChildrenClientsJsonLogoChildrenPrintJson = 'logo___childrenClientsJson___logo___childrenPrintJson',
  LogoChildrenClientsJsonLogoChildrenVideoJson = 'logo___childrenClientsJson___logo___childrenVideoJson',
  LogoChildrenClientsJsonLogoCtime = 'logo___childrenClientsJson___logo___ctime',
  LogoChildrenClientsJsonLogoCtimeMs = 'logo___childrenClientsJson___logo___ctimeMs',
  LogoChildrenClientsJsonLogoDev = 'logo___childrenClientsJson___logo___dev',
  LogoChildrenClientsJsonLogoDir = 'logo___childrenClientsJson___logo___dir',
  LogoChildrenClientsJsonLogoExt = 'logo___childrenClientsJson___logo___ext',
  LogoChildrenClientsJsonLogoExtension = 'logo___childrenClientsJson___logo___extension',
  LogoChildrenClientsJsonLogoGid = 'logo___childrenClientsJson___logo___gid',
  LogoChildrenClientsJsonLogoId = 'logo___childrenClientsJson___logo___id',
  LogoChildrenClientsJsonLogoIno = 'logo___childrenClientsJson___logo___ino',
  LogoChildrenClientsJsonLogoMode = 'logo___childrenClientsJson___logo___mode',
  LogoChildrenClientsJsonLogoModifiedTime = 'logo___childrenClientsJson___logo___modifiedTime',
  LogoChildrenClientsJsonLogoMtime = 'logo___childrenClientsJson___logo___mtime',
  LogoChildrenClientsJsonLogoMtimeMs = 'logo___childrenClientsJson___logo___mtimeMs',
  LogoChildrenClientsJsonLogoName = 'logo___childrenClientsJson___logo___name',
  LogoChildrenClientsJsonLogoNlink = 'logo___childrenClientsJson___logo___nlink',
  LogoChildrenClientsJsonLogoPrettySize = 'logo___childrenClientsJson___logo___prettySize',
  LogoChildrenClientsJsonLogoPublicUrl = 'logo___childrenClientsJson___logo___publicURL',
  LogoChildrenClientsJsonLogoRdev = 'logo___childrenClientsJson___logo___rdev',
  LogoChildrenClientsJsonLogoRelativeDirectory = 'logo___childrenClientsJson___logo___relativeDirectory',
  LogoChildrenClientsJsonLogoRelativePath = 'logo___childrenClientsJson___logo___relativePath',
  LogoChildrenClientsJsonLogoRoot = 'logo___childrenClientsJson___logo___root',
  LogoChildrenClientsJsonLogoSize = 'logo___childrenClientsJson___logo___size',
  LogoChildrenClientsJsonLogoSourceInstanceName = 'logo___childrenClientsJson___logo___sourceInstanceName',
  LogoChildrenClientsJsonLogoUid = 'logo___childrenClientsJson___logo___uid',
  LogoChildrenClientsJsonName = 'logo___childrenClientsJson___name',
  LogoChildrenClientsJsonParentChildren = 'logo___childrenClientsJson___parent___children',
  LogoChildrenClientsJsonParentId = 'logo___childrenClientsJson___parent___id',
  LogoChildrenClientsJsonUrl = 'logo___childrenClientsJson___url',
  LogoChildrenContentJson = 'logo___childrenContentJson',
  LogoChildrenContentJsonChildren = 'logo___childrenContentJson___children',
  LogoChildrenContentJsonChildrenChildren = 'logo___childrenContentJson___children___children',
  LogoChildrenContentJsonChildrenId = 'logo___childrenContentJson___children___id',
  LogoChildrenContentJsonConferenceParticipationConferencesOrganized = 'logo___childrenContentJson___conferenceParticipation___conferencesOrganized',
  LogoChildrenContentJsonConferenceParticipationPanelsOrganized = 'logo___childrenContentJson___conferenceParticipation___panelsOrganized',
  LogoChildrenContentJsonConferenceParticipationPapersPresented = 'logo___childrenContentJson___conferenceParticipation___papersPresented',
  LogoChildrenContentJsonDepartmentalAndUniversityService = 'logo___childrenContentJson___departmentalAndUniversityService',
  LogoChildrenContentJsonDepartmentalAndUniversityServiceDate = 'logo___childrenContentJson___departmentalAndUniversityService___date',
  LogoChildrenContentJsonDepartmentalAndUniversityServiceTitle = 'logo___childrenContentJson___departmentalAndUniversityService___title',
  LogoChildrenContentJsonEducation = 'logo___childrenContentJson___education',
  LogoChildrenContentJsonEducationDegree = 'logo___childrenContentJson___education___degree',
  LogoChildrenContentJsonEducationSource = 'logo___childrenContentJson___education___source',
  LogoChildrenContentJsonEducationUrl = 'logo___childrenContentJson___education___url',
  LogoChildrenContentJsonEducationYear = 'logo___childrenContentJson___education___year',
  LogoChildrenContentJsonFieldsCollection = 'logo___childrenContentJson___fields___collection',
  LogoChildrenContentJsonGrantsAndFellowships = 'logo___childrenContentJson___grantsAndFellowships',
  LogoChildrenContentJsonGrantsAndFellowshipsDate = 'logo___childrenContentJson___grantsAndFellowships___date',
  LogoChildrenContentJsonGrantsAndFellowshipsTitle = 'logo___childrenContentJson___grantsAndFellowships___title',
  LogoChildrenContentJsonId = 'logo___childrenContentJson___id',
  LogoChildrenContentJsonInternalContent = 'logo___childrenContentJson___internal___content',
  LogoChildrenContentJsonInternalContentDigest = 'logo___childrenContentJson___internal___contentDigest',
  LogoChildrenContentJsonInternalDescription = 'logo___childrenContentJson___internal___description',
  LogoChildrenContentJsonInternalFieldOwners = 'logo___childrenContentJson___internal___fieldOwners',
  LogoChildrenContentJsonInternalIgnoreType = 'logo___childrenContentJson___internal___ignoreType',
  LogoChildrenContentJsonInternalMediaType = 'logo___childrenContentJson___internal___mediaType',
  LogoChildrenContentJsonInternalOwner = 'logo___childrenContentJson___internal___owner',
  LogoChildrenContentJsonInternalType = 'logo___childrenContentJson___internal___type',
  LogoChildrenContentJsonInvitedTalks = 'logo___childrenContentJson___invitedTalks',
  LogoChildrenContentJsonInvitedTalksAuthors = 'logo___childrenContentJson___invitedTalks___authors',
  LogoChildrenContentJsonInvitedTalksDate = 'logo___childrenContentJson___invitedTalks___date',
  LogoChildrenContentJsonInvitedTalksExtra = 'logo___childrenContentJson___invitedTalks___extra',
  LogoChildrenContentJsonInvitedTalksLocation = 'logo___childrenContentJson___invitedTalks___location',
  LogoChildrenContentJsonInvitedTalksTitle = 'logo___childrenContentJson___invitedTalks___title',
  LogoChildrenContentJsonInvitedTalksUrl = 'logo___childrenContentJson___invitedTalks___url',
  LogoChildrenContentJsonParentChildren = 'logo___childrenContentJson___parent___children',
  LogoChildrenContentJsonParentId = 'logo___childrenContentJson___parent___id',
  LogoChildrenContentJsonProfessionalAppointments = 'logo___childrenContentJson___professionalAppointments',
  LogoChildrenContentJsonProfessionalAppointmentsDate = 'logo___childrenContentJson___professionalAppointments___date',
  LogoChildrenContentJsonProfessionalAppointmentsTitle = 'logo___childrenContentJson___professionalAppointments___title',
  LogoChildrenContentJsonProfessionalMemberships = 'logo___childrenContentJson___professionalMemberships',
  LogoChildrenContentJsonProfessionalMembershipsDate = 'logo___childrenContentJson___professionalMemberships___date',
  LogoChildrenContentJsonProfessionalMembershipsTitle = 'logo___childrenContentJson___professionalMemberships___title',
  LogoChildrenContentJsonProfessionalMembershipsUrl = 'logo___childrenContentJson___professionalMemberships___url',
  LogoChildrenContentJsonPublicationsBookChapters = 'logo___childrenContentJson___publications___bookChapters',
  LogoChildrenContentJsonPublicationsBooks = 'logo___childrenContentJson___publications___books',
  LogoChildrenContentJsonPublicationsConferenceProceedings = 'logo___childrenContentJson___publications___conferenceProceedings',
  LogoChildrenContentJsonPublicationsEditedVolumes = 'logo___childrenContentJson___publications___editedVolumes',
  LogoChildrenContentJsonPublicationsOtherPublications = 'logo___childrenContentJson___publications___otherPublications',
  LogoChildrenContentJsonPublicationsRefereedJournalArticles = 'logo___childrenContentJson___publications___refereedJournalArticles',
  LogoChildrenContentJsonReferences = 'logo___childrenContentJson___references',
  LogoChildrenContentJsonReferencesReference = 'logo___childrenContentJson___references___reference',
  LogoChildrenContentJsonReviewingExperience = 'logo___childrenContentJson___reviewingExperience',
  LogoChildrenContentJsonReviewingExperienceDate = 'logo___childrenContentJson___reviewingExperience___date',
  LogoChildrenContentJsonReviewingExperienceTitle = 'logo___childrenContentJson___reviewingExperience___title',
  LogoChildrenContentJsonSelectedPressAndMedia = 'logo___childrenContentJson___selectedPressAndMedia',
  LogoChildrenContentJsonSelectedPressAndMediaAuthors = 'logo___childrenContentJson___selectedPressAndMedia___authors',
  LogoChildrenContentJsonSelectedPressAndMediaDate = 'logo___childrenContentJson___selectedPressAndMedia___date',
  LogoChildrenContentJsonSelectedPressAndMediaFormattedSource = 'logo___childrenContentJson___selectedPressAndMedia___formattedSource',
  LogoChildrenContentJsonSelectedPressAndMediaSource = 'logo___childrenContentJson___selectedPressAndMedia___source',
  LogoChildrenContentJsonSelectedPressAndMediaTitle = 'logo___childrenContentJson___selectedPressAndMedia___title',
  LogoChildrenContentJsonSelectedPressAndMediaUrl = 'logo___childrenContentJson___selectedPressAndMedia___url',
  LogoChildrenContentJsonServiceToProfession = 'logo___childrenContentJson___serviceToProfession',
  LogoChildrenContentJsonServiceToProfessionDate = 'logo___childrenContentJson___serviceToProfession___date',
  LogoChildrenContentJsonServiceToProfessionTitle = 'logo___childrenContentJson___serviceToProfession___title',
  LogoChildrenContentJsonTeachingAndSupervisionExperience = 'logo___childrenContentJson___teachingAndSupervisionExperience',
  LogoChildrenContentJsonTeachingAndSupervisionExperienceCourses = 'logo___childrenContentJson___teachingAndSupervisionExperience___courses',
  LogoChildrenContentJsonTeachingAndSupervisionExperienceLocation = 'logo___childrenContentJson___teachingAndSupervisionExperience___location',
  LogoChildrenImageSharp = 'logo___childrenImageSharp',
  LogoChildrenImageSharpChildren = 'logo___childrenImageSharp___children',
  LogoChildrenImageSharpChildrenChildren = 'logo___childrenImageSharp___children___children',
  LogoChildrenImageSharpChildrenId = 'logo___childrenImageSharp___children___id',
  LogoChildrenImageSharpFieldsCollection = 'logo___childrenImageSharp___fields___collection',
  LogoChildrenImageSharpFixedAspectRatio = 'logo___childrenImageSharp___fixed___aspectRatio',
  LogoChildrenImageSharpFixedBase64 = 'logo___childrenImageSharp___fixed___base64',
  LogoChildrenImageSharpFixedHeight = 'logo___childrenImageSharp___fixed___height',
  LogoChildrenImageSharpFixedOriginalName = 'logo___childrenImageSharp___fixed___originalName',
  LogoChildrenImageSharpFixedSrc = 'logo___childrenImageSharp___fixed___src',
  LogoChildrenImageSharpFixedSrcSet = 'logo___childrenImageSharp___fixed___srcSet',
  LogoChildrenImageSharpFixedSrcSetWebp = 'logo___childrenImageSharp___fixed___srcSetWebp',
  LogoChildrenImageSharpFixedSrcWebp = 'logo___childrenImageSharp___fixed___srcWebp',
  LogoChildrenImageSharpFixedTracedSvg = 'logo___childrenImageSharp___fixed___tracedSVG',
  LogoChildrenImageSharpFixedWidth = 'logo___childrenImageSharp___fixed___width',
  LogoChildrenImageSharpFluidAspectRatio = 'logo___childrenImageSharp___fluid___aspectRatio',
  LogoChildrenImageSharpFluidBase64 = 'logo___childrenImageSharp___fluid___base64',
  LogoChildrenImageSharpFluidOriginalImg = 'logo___childrenImageSharp___fluid___originalImg',
  LogoChildrenImageSharpFluidOriginalName = 'logo___childrenImageSharp___fluid___originalName',
  LogoChildrenImageSharpFluidPresentationHeight = 'logo___childrenImageSharp___fluid___presentationHeight',
  LogoChildrenImageSharpFluidPresentationWidth = 'logo___childrenImageSharp___fluid___presentationWidth',
  LogoChildrenImageSharpFluidSizes = 'logo___childrenImageSharp___fluid___sizes',
  LogoChildrenImageSharpFluidSrc = 'logo___childrenImageSharp___fluid___src',
  LogoChildrenImageSharpFluidSrcSet = 'logo___childrenImageSharp___fluid___srcSet',
  LogoChildrenImageSharpFluidSrcSetWebp = 'logo___childrenImageSharp___fluid___srcSetWebp',
  LogoChildrenImageSharpFluidSrcWebp = 'logo___childrenImageSharp___fluid___srcWebp',
  LogoChildrenImageSharpFluidTracedSvg = 'logo___childrenImageSharp___fluid___tracedSVG',
  LogoChildrenImageSharpGatsbyImageData = 'logo___childrenImageSharp___gatsbyImageData',
  LogoChildrenImageSharpId = 'logo___childrenImageSharp___id',
  LogoChildrenImageSharpInternalContent = 'logo___childrenImageSharp___internal___content',
  LogoChildrenImageSharpInternalContentDigest = 'logo___childrenImageSharp___internal___contentDigest',
  LogoChildrenImageSharpInternalDescription = 'logo___childrenImageSharp___internal___description',
  LogoChildrenImageSharpInternalFieldOwners = 'logo___childrenImageSharp___internal___fieldOwners',
  LogoChildrenImageSharpInternalIgnoreType = 'logo___childrenImageSharp___internal___ignoreType',
  LogoChildrenImageSharpInternalMediaType = 'logo___childrenImageSharp___internal___mediaType',
  LogoChildrenImageSharpInternalOwner = 'logo___childrenImageSharp___internal___owner',
  LogoChildrenImageSharpInternalType = 'logo___childrenImageSharp___internal___type',
  LogoChildrenImageSharpOriginalHeight = 'logo___childrenImageSharp___original___height',
  LogoChildrenImageSharpOriginalSrc = 'logo___childrenImageSharp___original___src',
  LogoChildrenImageSharpOriginalWidth = 'logo___childrenImageSharp___original___width',
  LogoChildrenImageSharpParentChildren = 'logo___childrenImageSharp___parent___children',
  LogoChildrenImageSharpParentId = 'logo___childrenImageSharp___parent___id',
  LogoChildrenImageSharpResizeAspectRatio = 'logo___childrenImageSharp___resize___aspectRatio',
  LogoChildrenImageSharpResizeHeight = 'logo___childrenImageSharp___resize___height',
  LogoChildrenImageSharpResizeOriginalName = 'logo___childrenImageSharp___resize___originalName',
  LogoChildrenImageSharpResizeSrc = 'logo___childrenImageSharp___resize___src',
  LogoChildrenImageSharpResizeTracedSvg = 'logo___childrenImageSharp___resize___tracedSVG',
  LogoChildrenImageSharpResizeWidth = 'logo___childrenImageSharp___resize___width',
  LogoChildrenMarkdownRemark = 'logo___childrenMarkdownRemark',
  LogoChildrenMarkdownRemarkChildren = 'logo___childrenMarkdownRemark___children',
  LogoChildrenMarkdownRemarkChildrenChildren = 'logo___childrenMarkdownRemark___children___children',
  LogoChildrenMarkdownRemarkChildrenId = 'logo___childrenMarkdownRemark___children___id',
  LogoChildrenMarkdownRemarkExcerpt = 'logo___childrenMarkdownRemark___excerpt',
  LogoChildrenMarkdownRemarkExcerptAst = 'logo___childrenMarkdownRemark___excerptAst',
  LogoChildrenMarkdownRemarkFieldsCollection = 'logo___childrenMarkdownRemark___fields___collection',
  LogoChildrenMarkdownRemarkFieldsPath = 'logo___childrenMarkdownRemark___fields___path',
  LogoChildrenMarkdownRemarkFieldsSlug = 'logo___childrenMarkdownRemark___fields___slug',
  LogoChildrenMarkdownRemarkFieldsTags = 'logo___childrenMarkdownRemark___fields___tags',
  LogoChildrenMarkdownRemarkFileAbsolutePath = 'logo___childrenMarkdownRemark___fileAbsolutePath',
  LogoChildrenMarkdownRemarkFrontmatterCategory = 'logo___childrenMarkdownRemark___frontmatter___category',
  LogoChildrenMarkdownRemarkFrontmatterDate = 'logo___childrenMarkdownRemark___frontmatter___date',
  LogoChildrenMarkdownRemarkFrontmatterIsbn10 = 'logo___childrenMarkdownRemark___frontmatter___isbn10',
  LogoChildrenMarkdownRemarkFrontmatterIsbn13 = 'logo___childrenMarkdownRemark___frontmatter___isbn13',
  LogoChildrenMarkdownRemarkFrontmatterLayout = 'logo___childrenMarkdownRemark___frontmatter___layout',
  LogoChildrenMarkdownRemarkFrontmatterReviews = 'logo___childrenMarkdownRemark___frontmatter___reviews',
  LogoChildrenMarkdownRemarkFrontmatterSubtitle = 'logo___childrenMarkdownRemark___frontmatter___subtitle',
  LogoChildrenMarkdownRemarkFrontmatterTags = 'logo___childrenMarkdownRemark___frontmatter___tags',
  LogoChildrenMarkdownRemarkFrontmatterTitle = 'logo___childrenMarkdownRemark___frontmatter___title',
  LogoChildrenMarkdownRemarkHeadings = 'logo___childrenMarkdownRemark___headings',
  LogoChildrenMarkdownRemarkHeadingsDepth = 'logo___childrenMarkdownRemark___headings___depth',
  LogoChildrenMarkdownRemarkHeadingsId = 'logo___childrenMarkdownRemark___headings___id',
  LogoChildrenMarkdownRemarkHeadingsValue = 'logo___childrenMarkdownRemark___headings___value',
  LogoChildrenMarkdownRemarkHtml = 'logo___childrenMarkdownRemark___html',
  LogoChildrenMarkdownRemarkHtmlAst = 'logo___childrenMarkdownRemark___htmlAst',
  LogoChildrenMarkdownRemarkId = 'logo___childrenMarkdownRemark___id',
  LogoChildrenMarkdownRemarkInternalContent = 'logo___childrenMarkdownRemark___internal___content',
  LogoChildrenMarkdownRemarkInternalContentDigest = 'logo___childrenMarkdownRemark___internal___contentDigest',
  LogoChildrenMarkdownRemarkInternalDescription = 'logo___childrenMarkdownRemark___internal___description',
  LogoChildrenMarkdownRemarkInternalFieldOwners = 'logo___childrenMarkdownRemark___internal___fieldOwners',
  LogoChildrenMarkdownRemarkInternalIgnoreType = 'logo___childrenMarkdownRemark___internal___ignoreType',
  LogoChildrenMarkdownRemarkInternalMediaType = 'logo___childrenMarkdownRemark___internal___mediaType',
  LogoChildrenMarkdownRemarkInternalOwner = 'logo___childrenMarkdownRemark___internal___owner',
  LogoChildrenMarkdownRemarkInternalType = 'logo___childrenMarkdownRemark___internal___type',
  LogoChildrenMarkdownRemarkParentChildren = 'logo___childrenMarkdownRemark___parent___children',
  LogoChildrenMarkdownRemarkParentId = 'logo___childrenMarkdownRemark___parent___id',
  LogoChildrenMarkdownRemarkRawMarkdownBody = 'logo___childrenMarkdownRemark___rawMarkdownBody',
  LogoChildrenMarkdownRemarkTableOfContents = 'logo___childrenMarkdownRemark___tableOfContents',
  LogoChildrenMarkdownRemarkTimeToRead = 'logo___childrenMarkdownRemark___timeToRead',
  LogoChildrenMarkdownRemarkWordCountParagraphs = 'logo___childrenMarkdownRemark___wordCount___paragraphs',
  LogoChildrenMarkdownRemarkWordCountSentences = 'logo___childrenMarkdownRemark___wordCount___sentences',
  LogoChildrenMarkdownRemarkWordCountWords = 'logo___childrenMarkdownRemark___wordCount___words',
  LogoChildrenMdx = 'logo___childrenMdx',
  LogoChildrenMdxBody = 'logo___childrenMdx___body',
  LogoChildrenMdxChildren = 'logo___childrenMdx___children',
  LogoChildrenMdxChildrenChildren = 'logo___childrenMdx___children___children',
  LogoChildrenMdxChildrenId = 'logo___childrenMdx___children___id',
  LogoChildrenMdxExcerpt = 'logo___childrenMdx___excerpt',
  LogoChildrenMdxFieldsCollection = 'logo___childrenMdx___fields___collection',
  LogoChildrenMdxFieldsSlug = 'logo___childrenMdx___fields___slug',
  LogoChildrenMdxFileAbsolutePath = 'logo___childrenMdx___fileAbsolutePath',
  LogoChildrenMdxFrontmatterTitle = 'logo___childrenMdx___frontmatter___title',
  LogoChildrenMdxHeadings = 'logo___childrenMdx___headings',
  LogoChildrenMdxHeadingsDepth = 'logo___childrenMdx___headings___depth',
  LogoChildrenMdxHeadingsValue = 'logo___childrenMdx___headings___value',
  LogoChildrenMdxHtml = 'logo___childrenMdx___html',
  LogoChildrenMdxId = 'logo___childrenMdx___id',
  LogoChildrenMdxInternalContent = 'logo___childrenMdx___internal___content',
  LogoChildrenMdxInternalContentDigest = 'logo___childrenMdx___internal___contentDigest',
  LogoChildrenMdxInternalDescription = 'logo___childrenMdx___internal___description',
  LogoChildrenMdxInternalFieldOwners = 'logo___childrenMdx___internal___fieldOwners',
  LogoChildrenMdxInternalIgnoreType = 'logo___childrenMdx___internal___ignoreType',
  LogoChildrenMdxInternalMediaType = 'logo___childrenMdx___internal___mediaType',
  LogoChildrenMdxInternalOwner = 'logo___childrenMdx___internal___owner',
  LogoChildrenMdxInternalType = 'logo___childrenMdx___internal___type',
  LogoChildrenMdxMdxAst = 'logo___childrenMdx___mdxAST',
  LogoChildrenMdxParentChildren = 'logo___childrenMdx___parent___children',
  LogoChildrenMdxParentId = 'logo___childrenMdx___parent___id',
  LogoChildrenMdxRawBody = 'logo___childrenMdx___rawBody',
  LogoChildrenMdxSlug = 'logo___childrenMdx___slug',
  LogoChildrenMdxTableOfContents = 'logo___childrenMdx___tableOfContents',
  LogoChildrenMdxTimeToRead = 'logo___childrenMdx___timeToRead',
  LogoChildrenMdxWordCountParagraphs = 'logo___childrenMdx___wordCount___paragraphs',
  LogoChildrenMdxWordCountSentences = 'logo___childrenMdx___wordCount___sentences',
  LogoChildrenMdxWordCountWords = 'logo___childrenMdx___wordCount___words',
  LogoChildrenMediaJson = 'logo___childrenMediaJson',
  LogoChildrenMediaJsonChildren = 'logo___childrenMediaJson___children',
  LogoChildrenMediaJsonChildrenChildren = 'logo___childrenMediaJson___children___children',
  LogoChildrenMediaJsonChildrenId = 'logo___childrenMediaJson___children___id',
  LogoChildrenMediaJsonFieldsCollection = 'logo___childrenMediaJson___fields___collection',
  LogoChildrenMediaJsonId = 'logo___childrenMediaJson___id',
  LogoChildrenMediaJsonInternalContent = 'logo___childrenMediaJson___internal___content',
  LogoChildrenMediaJsonInternalContentDigest = 'logo___childrenMediaJson___internal___contentDigest',
  LogoChildrenMediaJsonInternalDescription = 'logo___childrenMediaJson___internal___description',
  LogoChildrenMediaJsonInternalFieldOwners = 'logo___childrenMediaJson___internal___fieldOwners',
  LogoChildrenMediaJsonInternalIgnoreType = 'logo___childrenMediaJson___internal___ignoreType',
  LogoChildrenMediaJsonInternalMediaType = 'logo___childrenMediaJson___internal___mediaType',
  LogoChildrenMediaJsonInternalOwner = 'logo___childrenMediaJson___internal___owner',
  LogoChildrenMediaJsonInternalType = 'logo___childrenMediaJson___internal___type',
  LogoChildrenMediaJsonLogoAbsolutePath = 'logo___childrenMediaJson___logo___absolutePath',
  LogoChildrenMediaJsonLogoAccessTime = 'logo___childrenMediaJson___logo___accessTime',
  LogoChildrenMediaJsonLogoAtime = 'logo___childrenMediaJson___logo___atime',
  LogoChildrenMediaJsonLogoAtimeMs = 'logo___childrenMediaJson___logo___atimeMs',
  LogoChildrenMediaJsonLogoBase = 'logo___childrenMediaJson___logo___base',
  LogoChildrenMediaJsonLogoBirthTime = 'logo___childrenMediaJson___logo___birthTime',
  LogoChildrenMediaJsonLogoBirthtime = 'logo___childrenMediaJson___logo___birthtime',
  LogoChildrenMediaJsonLogoBirthtimeMs = 'logo___childrenMediaJson___logo___birthtimeMs',
  LogoChildrenMediaJsonLogoBlksize = 'logo___childrenMediaJson___logo___blksize',
  LogoChildrenMediaJsonLogoBlocks = 'logo___childrenMediaJson___logo___blocks',
  LogoChildrenMediaJsonLogoChangeTime = 'logo___childrenMediaJson___logo___changeTime',
  LogoChildrenMediaJsonLogoChildren = 'logo___childrenMediaJson___logo___children',
  LogoChildrenMediaJsonLogoChildrenAudioJson = 'logo___childrenMediaJson___logo___childrenAudioJson',
  LogoChildrenMediaJsonLogoChildrenClientsJson = 'logo___childrenMediaJson___logo___childrenClientsJson',
  LogoChildrenMediaJsonLogoChildrenContentJson = 'logo___childrenMediaJson___logo___childrenContentJson',
  LogoChildrenMediaJsonLogoChildrenImageSharp = 'logo___childrenMediaJson___logo___childrenImageSharp',
  LogoChildrenMediaJsonLogoChildrenMarkdownRemark = 'logo___childrenMediaJson___logo___childrenMarkdownRemark',
  LogoChildrenMediaJsonLogoChildrenMdx = 'logo___childrenMediaJson___logo___childrenMdx',
  LogoChildrenMediaJsonLogoChildrenMediaJson = 'logo___childrenMediaJson___logo___childrenMediaJson',
  LogoChildrenMediaJsonLogoChildrenPrintJson = 'logo___childrenMediaJson___logo___childrenPrintJson',
  LogoChildrenMediaJsonLogoChildrenVideoJson = 'logo___childrenMediaJson___logo___childrenVideoJson',
  LogoChildrenMediaJsonLogoCtime = 'logo___childrenMediaJson___logo___ctime',
  LogoChildrenMediaJsonLogoCtimeMs = 'logo___childrenMediaJson___logo___ctimeMs',
  LogoChildrenMediaJsonLogoDev = 'logo___childrenMediaJson___logo___dev',
  LogoChildrenMediaJsonLogoDir = 'logo___childrenMediaJson___logo___dir',
  LogoChildrenMediaJsonLogoExt = 'logo___childrenMediaJson___logo___ext',
  LogoChildrenMediaJsonLogoExtension = 'logo___childrenMediaJson___logo___extension',
  LogoChildrenMediaJsonLogoGid = 'logo___childrenMediaJson___logo___gid',
  LogoChildrenMediaJsonLogoId = 'logo___childrenMediaJson___logo___id',
  LogoChildrenMediaJsonLogoIno = 'logo___childrenMediaJson___logo___ino',
  LogoChildrenMediaJsonLogoMode = 'logo___childrenMediaJson___logo___mode',
  LogoChildrenMediaJsonLogoModifiedTime = 'logo___childrenMediaJson___logo___modifiedTime',
  LogoChildrenMediaJsonLogoMtime = 'logo___childrenMediaJson___logo___mtime',
  LogoChildrenMediaJsonLogoMtimeMs = 'logo___childrenMediaJson___logo___mtimeMs',
  LogoChildrenMediaJsonLogoName = 'logo___childrenMediaJson___logo___name',
  LogoChildrenMediaJsonLogoNlink = 'logo___childrenMediaJson___logo___nlink',
  LogoChildrenMediaJsonLogoPrettySize = 'logo___childrenMediaJson___logo___prettySize',
  LogoChildrenMediaJsonLogoPublicUrl = 'logo___childrenMediaJson___logo___publicURL',
  LogoChildrenMediaJsonLogoRdev = 'logo___childrenMediaJson___logo___rdev',
  LogoChildrenMediaJsonLogoRelativeDirectory = 'logo___childrenMediaJson___logo___relativeDirectory',
  LogoChildrenMediaJsonLogoRelativePath = 'logo___childrenMediaJson___logo___relativePath',
  LogoChildrenMediaJsonLogoRoot = 'logo___childrenMediaJson___logo___root',
  LogoChildrenMediaJsonLogoSize = 'logo___childrenMediaJson___logo___size',
  LogoChildrenMediaJsonLogoSourceInstanceName = 'logo___childrenMediaJson___logo___sourceInstanceName',
  LogoChildrenMediaJsonLogoUid = 'logo___childrenMediaJson___logo___uid',
  LogoChildrenMediaJsonName = 'logo___childrenMediaJson___name',
  LogoChildrenMediaJsonParentChildren = 'logo___childrenMediaJson___parent___children',
  LogoChildrenMediaJsonParentId = 'logo___childrenMediaJson___parent___id',
  LogoChildrenMediaJsonUrl = 'logo___childrenMediaJson___url',
  LogoChildrenPrintJson = 'logo___childrenPrintJson',
  LogoChildrenPrintJsonChildren = 'logo___childrenPrintJson___children',
  LogoChildrenPrintJsonChildrenChildren = 'logo___childrenPrintJson___children___children',
  LogoChildrenPrintJsonChildrenId = 'logo___childrenPrintJson___children___id',
  LogoChildrenPrintJsonFieldsCollection = 'logo___childrenPrintJson___fields___collection',
  LogoChildrenPrintJsonId = 'logo___childrenPrintJson___id',
  LogoChildrenPrintJsonInternalContent = 'logo___childrenPrintJson___internal___content',
  LogoChildrenPrintJsonInternalContentDigest = 'logo___childrenPrintJson___internal___contentDigest',
  LogoChildrenPrintJsonInternalDescription = 'logo___childrenPrintJson___internal___description',
  LogoChildrenPrintJsonInternalFieldOwners = 'logo___childrenPrintJson___internal___fieldOwners',
  LogoChildrenPrintJsonInternalIgnoreType = 'logo___childrenPrintJson___internal___ignoreType',
  LogoChildrenPrintJsonInternalMediaType = 'logo___childrenPrintJson___internal___mediaType',
  LogoChildrenPrintJsonInternalOwner = 'logo___childrenPrintJson___internal___owner',
  LogoChildrenPrintJsonInternalType = 'logo___childrenPrintJson___internal___type',
  LogoChildrenPrintJsonParentChildren = 'logo___childrenPrintJson___parent___children',
  LogoChildrenPrintJsonParentId = 'logo___childrenPrintJson___parent___id',
  LogoChildrenPrintJsonSource = 'logo___childrenPrintJson___source',
  LogoChildrenPrintJsonThumbnail = 'logo___childrenPrintJson___thumbnail',
  LogoChildrenPrintJsonTitle = 'logo___childrenPrintJson___title',
  LogoChildrenPrintJsonUrl = 'logo___childrenPrintJson___url',
  LogoChildrenVideoJson = 'logo___childrenVideoJson',
  LogoChildrenVideoJsonChildren = 'logo___childrenVideoJson___children',
  LogoChildrenVideoJsonChildrenChildren = 'logo___childrenVideoJson___children___children',
  LogoChildrenVideoJsonChildrenId = 'logo___childrenVideoJson___children___id',
  LogoChildrenVideoJsonFieldsCollection = 'logo___childrenVideoJson___fields___collection',
  LogoChildrenVideoJsonId = 'logo___childrenVideoJson___id',
  LogoChildrenVideoJsonInternalContent = 'logo___childrenVideoJson___internal___content',
  LogoChildrenVideoJsonInternalContentDigest = 'logo___childrenVideoJson___internal___contentDigest',
  LogoChildrenVideoJsonInternalDescription = 'logo___childrenVideoJson___internal___description',
  LogoChildrenVideoJsonInternalFieldOwners = 'logo___childrenVideoJson___internal___fieldOwners',
  LogoChildrenVideoJsonInternalIgnoreType = 'logo___childrenVideoJson___internal___ignoreType',
  LogoChildrenVideoJsonInternalMediaType = 'logo___childrenVideoJson___internal___mediaType',
  LogoChildrenVideoJsonInternalOwner = 'logo___childrenVideoJson___internal___owner',
  LogoChildrenVideoJsonInternalType = 'logo___childrenVideoJson___internal___type',
  LogoChildrenVideoJsonParentChildren = 'logo___childrenVideoJson___parent___children',
  LogoChildrenVideoJsonParentId = 'logo___childrenVideoJson___parent___id',
  LogoChildrenVideoJsonSource = 'logo___childrenVideoJson___source',
  LogoChildrenVideoJsonTitle = 'logo___childrenVideoJson___title',
  LogoChildrenVideoJsonUrl = 'logo___childrenVideoJson___url',
  LogoChildrenChildren = 'logo___children___children',
  LogoChildrenChildrenChildren = 'logo___children___children___children',
  LogoChildrenChildrenId = 'logo___children___children___id',
  LogoChildrenId = 'logo___children___id',
  LogoChildrenInternalContent = 'logo___children___internal___content',
  LogoChildrenInternalContentDigest = 'logo___children___internal___contentDigest',
  LogoChildrenInternalDescription = 'logo___children___internal___description',
  LogoChildrenInternalFieldOwners = 'logo___children___internal___fieldOwners',
  LogoChildrenInternalIgnoreType = 'logo___children___internal___ignoreType',
  LogoChildrenInternalMediaType = 'logo___children___internal___mediaType',
  LogoChildrenInternalOwner = 'logo___children___internal___owner',
  LogoChildrenInternalType = 'logo___children___internal___type',
  LogoChildrenParentChildren = 'logo___children___parent___children',
  LogoChildrenParentId = 'logo___children___parent___id',
  LogoCtime = 'logo___ctime',
  LogoCtimeMs = 'logo___ctimeMs',
  LogoDev = 'logo___dev',
  LogoDir = 'logo___dir',
  LogoExt = 'logo___ext',
  LogoExtension = 'logo___extension',
  LogoGid = 'logo___gid',
  LogoId = 'logo___id',
  LogoIno = 'logo___ino',
  LogoInternalContent = 'logo___internal___content',
  LogoInternalContentDigest = 'logo___internal___contentDigest',
  LogoInternalDescription = 'logo___internal___description',
  LogoInternalFieldOwners = 'logo___internal___fieldOwners',
  LogoInternalIgnoreType = 'logo___internal___ignoreType',
  LogoInternalMediaType = 'logo___internal___mediaType',
  LogoInternalOwner = 'logo___internal___owner',
  LogoInternalType = 'logo___internal___type',
  LogoMode = 'logo___mode',
  LogoModifiedTime = 'logo___modifiedTime',
  LogoMtime = 'logo___mtime',
  LogoMtimeMs = 'logo___mtimeMs',
  LogoName = 'logo___name',
  LogoNlink = 'logo___nlink',
  LogoParentChildren = 'logo___parent___children',
  LogoParentChildrenChildren = 'logo___parent___children___children',
  LogoParentChildrenId = 'logo___parent___children___id',
  LogoParentId = 'logo___parent___id',
  LogoParentInternalContent = 'logo___parent___internal___content',
  LogoParentInternalContentDigest = 'logo___parent___internal___contentDigest',
  LogoParentInternalDescription = 'logo___parent___internal___description',
  LogoParentInternalFieldOwners = 'logo___parent___internal___fieldOwners',
  LogoParentInternalIgnoreType = 'logo___parent___internal___ignoreType',
  LogoParentInternalMediaType = 'logo___parent___internal___mediaType',
  LogoParentInternalOwner = 'logo___parent___internal___owner',
  LogoParentInternalType = 'logo___parent___internal___type',
  LogoParentParentChildren = 'logo___parent___parent___children',
  LogoParentParentId = 'logo___parent___parent___id',
  LogoPrettySize = 'logo___prettySize',
  LogoPublicUrl = 'logo___publicURL',
  LogoRdev = 'logo___rdev',
  LogoRelativeDirectory = 'logo___relativeDirectory',
  LogoRelativePath = 'logo___relativePath',
  LogoRoot = 'logo___root',
  LogoSize = 'logo___size',
  LogoSourceInstanceName = 'logo___sourceInstanceName',
  LogoUid = 'logo___uid',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Url = 'url',
}

export type ClientsJsonFieldsFilterInput = {
  collection?: Maybe<StringQueryOperatorInput>;
};

export type ClientsJsonFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  fields?: Maybe<ClientsJsonFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  logo?: Maybe<FileFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type ClientsJsonFilterListInput = {
  elemMatch?: Maybe<ClientsJsonFilterInput>;
};

export type ClientsJsonGroupConnection = {
  __typename?: 'ClientsJsonGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ClientsJsonEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ClientsJsonGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ClientsJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ClientsJsonGroupConnectionDistinctArgs = {
  field: ClientsJsonFieldsEnum;
};

export type ClientsJsonGroupConnectionGroupArgs = {
  field: ClientsJsonFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ClientsJsonGroupConnectionMaxArgs = {
  field: ClientsJsonFieldsEnum;
};

export type ClientsJsonGroupConnectionMinArgs = {
  field: ClientsJsonFieldsEnum;
};

export type ClientsJsonGroupConnectionSumArgs = {
  field: ClientsJsonFieldsEnum;
};

export type ClientsJsonSortInput = {
  fields?: Maybe<Array<Maybe<ClientsJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentJson = Node & {
  __typename?: 'ContentJson';
  children: Array<Node>;
  conferenceParticipation?: Maybe<ContentJsonConferenceParticipation>;
  departmentalAndUniversityService?: Maybe<
    Array<Maybe<ContentJsonDepartmentalAndUniversityService>>
  >;
  education?: Maybe<Array<Maybe<ContentJsonEducation>>>;
  fields?: Maybe<ContentJsonFields>;
  grantsAndFellowships?: Maybe<Array<Maybe<ContentJsonGrantsAndFellowships>>>;
  id: Scalars['ID'];
  internal: Internal;
  invitedTalks?: Maybe<Array<Maybe<ContentJsonInvitedTalks>>>;
  parent?: Maybe<Node>;
  professionalAppointments?: Maybe<
    Array<Maybe<ContentJsonProfessionalAppointments>>
  >;
  professionalMemberships?: Maybe<
    Array<Maybe<ContentJsonProfessionalMemberships>>
  >;
  publications?: Maybe<ContentJsonPublications>;
  references?: Maybe<Array<Maybe<ContentJsonReferences>>>;
  reviewingExperience?: Maybe<Array<Maybe<ContentJsonReviewingExperience>>>;
  selectedPressAndMedia?: Maybe<Array<Maybe<ContentJsonSelectedPressAndMedia>>>;
  serviceToProfession?: Maybe<Array<Maybe<ContentJsonServiceToProfession>>>;
  teachingAndSupervisionExperience?: Maybe<
    Array<Maybe<ContentJsonTeachingAndSupervisionExperience>>
  >;
};

export type ContentJsonConferenceParticipation = {
  __typename?: 'ContentJsonConferenceParticipation';
  conferencesOrganized?: Maybe<
    Array<Maybe<ContentJsonConferenceParticipationConferencesOrganized>>
  >;
  panelsOrganized?: Maybe<
    Array<Maybe<ContentJsonConferenceParticipationPanelsOrganized>>
  >;
  papersPresented?: Maybe<
    Array<Maybe<ContentJsonConferenceParticipationPapersPresented>>
  >;
};

export type ContentJsonConferenceParticipationConferencesOrganized = {
  __typename?: 'ContentJsonConferenceParticipationConferencesOrganized';
  date?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentJsonConferenceParticipationConferencesOrganizedFilterInput =
  {
    date?: Maybe<StringQueryOperatorInput>;
    location?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
  };

export type ContentJsonConferenceParticipationConferencesOrganizedFilterListInput =
  {
    elemMatch?: Maybe<ContentJsonConferenceParticipationConferencesOrganizedFilterInput>;
  };

export type ContentJsonConferenceParticipationFilterInput = {
  conferencesOrganized?: Maybe<ContentJsonConferenceParticipationConferencesOrganizedFilterListInput>;
  panelsOrganized?: Maybe<ContentJsonConferenceParticipationPanelsOrganizedFilterListInput>;
  papersPresented?: Maybe<ContentJsonConferenceParticipationPapersPresentedFilterListInput>;
};

export type ContentJsonConferenceParticipationPanelsOrganized = {
  __typename?: 'ContentJsonConferenceParticipationPanelsOrganized';
  authors?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  locatoin?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentJsonConferenceParticipationPanelsOrganizedFilterInput = {
  authors?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<StringQueryOperatorInput>;
  extra?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  locatoin?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonConferenceParticipationPanelsOrganizedFilterListInput = {
  elemMatch?: Maybe<ContentJsonConferenceParticipationPanelsOrganizedFilterInput>;
};

export type ContentJsonConferenceParticipationPapersPresented = {
  __typename?: 'ContentJsonConferenceParticipationPapersPresented';
  authors?: Maybe<Scalars['String']>;
  conference?: Maybe<ContentJsonConferenceParticipationPapersPresentedConference>;
  date?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentJsonConferenceParticipationPapersPresentedConference = {
  __typename?: 'ContentJsonConferenceParticipationPapersPresentedConference';
  location?: Maybe<Scalars['String']>;
  locations?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentJsonConferenceParticipationPapersPresentedConferenceFilterInput =
  {
    location?: Maybe<StringQueryOperatorInput>;
    locations?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
  };

export type ContentJsonConferenceParticipationPapersPresentedFilterInput = {
  authors?: Maybe<StringQueryOperatorInput>;
  conference?: Maybe<ContentJsonConferenceParticipationPapersPresentedConferenceFilterInput>;
  date?: Maybe<StringQueryOperatorInput>;
  extra?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonConferenceParticipationPapersPresentedFilterListInput = {
  elemMatch?: Maybe<ContentJsonConferenceParticipationPapersPresentedFilterInput>;
};

export type ContentJsonConnection = {
  __typename?: 'ContentJsonConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentJsonEdge>;
  group: Array<ContentJsonGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ContentJsonConnectionDistinctArgs = {
  field: ContentJsonFieldsEnum;
};

export type ContentJsonConnectionGroupArgs = {
  field: ContentJsonFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ContentJsonConnectionMaxArgs = {
  field: ContentJsonFieldsEnum;
};

export type ContentJsonConnectionMinArgs = {
  field: ContentJsonFieldsEnum;
};

export type ContentJsonConnectionSumArgs = {
  field: ContentJsonFieldsEnum;
};

export type ContentJsonDepartmentalAndUniversityService = {
  __typename?: 'ContentJsonDepartmentalAndUniversityService';
  date?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentJsonDepartmentalAndUniversityServiceFilterInput = {
  date?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonDepartmentalAndUniversityServiceFilterListInput = {
  elemMatch?: Maybe<ContentJsonDepartmentalAndUniversityServiceFilterInput>;
};

export type ContentJsonEdge = {
  __typename?: 'ContentJsonEdge';
  next?: Maybe<ContentJson>;
  node: ContentJson;
  previous?: Maybe<ContentJson>;
};

export type ContentJsonEducation = {
  __typename?: 'ContentJsonEducation';
  degree?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
};

export type ContentJsonEducationYearArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentJsonEducationFilterInput = {
  degree?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  year?: Maybe<DateQueryOperatorInput>;
};

export type ContentJsonEducationFilterListInput = {
  elemMatch?: Maybe<ContentJsonEducationFilterInput>;
};

export type ContentJsonFields = {
  __typename?: 'ContentJsonFields';
  collection?: Maybe<Scalars['String']>;
};

export enum ContentJsonFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ConferenceParticipationConferencesOrganized = 'conferenceParticipation___conferencesOrganized',
  ConferenceParticipationConferencesOrganizedDate = 'conferenceParticipation___conferencesOrganized___date',
  ConferenceParticipationConferencesOrganizedLocation = 'conferenceParticipation___conferencesOrganized___location',
  ConferenceParticipationConferencesOrganizedTitle = 'conferenceParticipation___conferencesOrganized___title',
  ConferenceParticipationPanelsOrganized = 'conferenceParticipation___panelsOrganized',
  ConferenceParticipationPanelsOrganizedAuthors = 'conferenceParticipation___panelsOrganized___authors',
  ConferenceParticipationPanelsOrganizedDate = 'conferenceParticipation___panelsOrganized___date',
  ConferenceParticipationPanelsOrganizedExtra = 'conferenceParticipation___panelsOrganized___extra',
  ConferenceParticipationPanelsOrganizedLocation = 'conferenceParticipation___panelsOrganized___location',
  ConferenceParticipationPanelsOrganizedLocatoin = 'conferenceParticipation___panelsOrganized___locatoin',
  ConferenceParticipationPanelsOrganizedTitle = 'conferenceParticipation___panelsOrganized___title',
  ConferenceParticipationPanelsOrganizedUrl = 'conferenceParticipation___panelsOrganized___url',
  ConferenceParticipationPapersPresented = 'conferenceParticipation___papersPresented',
  ConferenceParticipationPapersPresentedAuthors = 'conferenceParticipation___papersPresented___authors',
  ConferenceParticipationPapersPresentedConferenceLocation = 'conferenceParticipation___papersPresented___conference___location',
  ConferenceParticipationPapersPresentedConferenceLocations = 'conferenceParticipation___papersPresented___conference___locations',
  ConferenceParticipationPapersPresentedConferenceTitle = 'conferenceParticipation___papersPresented___conference___title',
  ConferenceParticipationPapersPresentedDate = 'conferenceParticipation___papersPresented___date',
  ConferenceParticipationPapersPresentedExtra = 'conferenceParticipation___papersPresented___extra',
  ConferenceParticipationPapersPresentedTitle = 'conferenceParticipation___papersPresented___title',
  DepartmentalAndUniversityService = 'departmentalAndUniversityService',
  DepartmentalAndUniversityServiceDate = 'departmentalAndUniversityService___date',
  DepartmentalAndUniversityServiceTitle = 'departmentalAndUniversityService___title',
  Education = 'education',
  EducationDegree = 'education___degree',
  EducationSource = 'education___source',
  EducationUrl = 'education___url',
  EducationYear = 'education___year',
  FieldsCollection = 'fields___collection',
  GrantsAndFellowships = 'grantsAndFellowships',
  GrantsAndFellowshipsDate = 'grantsAndFellowships___date',
  GrantsAndFellowshipsTitle = 'grantsAndFellowships___title',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  InvitedTalks = 'invitedTalks',
  InvitedTalksAuthors = 'invitedTalks___authors',
  InvitedTalksDate = 'invitedTalks___date',
  InvitedTalksExtra = 'invitedTalks___extra',
  InvitedTalksLocation = 'invitedTalks___location',
  InvitedTalksTitle = 'invitedTalks___title',
  InvitedTalksUrl = 'invitedTalks___url',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  ProfessionalAppointments = 'professionalAppointments',
  ProfessionalAppointmentsDate = 'professionalAppointments___date',
  ProfessionalAppointmentsOrganizationTitle = 'professionalAppointments___organization___title',
  ProfessionalAppointmentsOrganizationUrl = 'professionalAppointments___organization___url',
  ProfessionalAppointmentsTitle = 'professionalAppointments___title',
  ProfessionalMemberships = 'professionalMemberships',
  ProfessionalMembershipsDate = 'professionalMemberships___date',
  ProfessionalMembershipsTitle = 'professionalMemberships___title',
  ProfessionalMembershipsUrl = 'professionalMemberships___url',
  PublicationsBookChapters = 'publications___bookChapters',
  PublicationsBookChaptersAuthors = 'publications___bookChapters___authors',
  PublicationsBookChaptersBookAuthors = 'publications___bookChapters___book___authors',
  PublicationsBookChaptersBookPages = 'publications___bookChapters___book___pages',
  PublicationsBookChaptersBookTitle = 'publications___bookChapters___book___title',
  PublicationsBookChaptersBookUrl = 'publications___bookChapters___book___url',
  PublicationsBookChaptersDate = 'publications___bookChapters___date',
  PublicationsBookChaptersPages = 'publications___bookChapters___pages',
  PublicationsBookChaptersTitle = 'publications___bookChapters___title',
  PublicationsBooks = 'publications___books',
  PublicationsBooksAuthors = 'publications___books___authors',
  PublicationsBooksDate = 'publications___books___date',
  PublicationsBooksPublisherLocation = 'publications___books___publisher___location',
  PublicationsBooksPublisherTitle = 'publications___books___publisher___title',
  PublicationsBooksTitle = 'publications___books___title',
  PublicationsBooksUrl = 'publications___books___url',
  PublicationsConferenceProceedings = 'publications___conferenceProceedings',
  PublicationsConferenceProceedingsAuthors = 'publications___conferenceProceedings___authors',
  PublicationsConferenceProceedingsConferenceLocation = 'publications___conferenceProceedings___conference___location',
  PublicationsConferenceProceedingsConferenceTitle = 'publications___conferenceProceedings___conference___title',
  PublicationsConferenceProceedingsDate = 'publications___conferenceProceedings___date',
  PublicationsConferenceProceedingsTitle = 'publications___conferenceProceedings___title',
  PublicationsConferenceProceedingsUrl = 'publications___conferenceProceedings___url',
  PublicationsEditedVolumes = 'publications___editedVolumes',
  PublicationsEditedVolumesAuthors = 'publications___editedVolumes___authors',
  PublicationsEditedVolumesDate = 'publications___editedVolumes___date',
  PublicationsEditedVolumesPublisherLocation = 'publications___editedVolumes___publisher___location',
  PublicationsEditedVolumesPublisherTitle = 'publications___editedVolumes___publisher___title',
  PublicationsEditedVolumesTitle = 'publications___editedVolumes___title',
  PublicationsEditedVolumesUrl = 'publications___editedVolumes___url',
  PublicationsOtherPublications = 'publications___otherPublications',
  PublicationsOtherPublicationsAuthors = 'publications___otherPublications___authors',
  PublicationsOtherPublicationsDate = 'publications___otherPublications___date',
  PublicationsOtherPublicationsPublicationEdition = 'publications___otherPublications___publication___edition',
  PublicationsOtherPublicationsPublicationLocation = 'publications___otherPublications___publication___location',
  PublicationsOtherPublicationsPublicationPages = 'publications___otherPublications___publication___pages',
  PublicationsOtherPublicationsPublicationTitle = 'publications___otherPublications___publication___title',
  PublicationsOtherPublicationsPublicationUrl = 'publications___otherPublications___publication___url',
  PublicationsOtherPublicationsTitle = 'publications___otherPublications___title',
  PublicationsOtherPublicationsUrl = 'publications___otherPublications___url',
  PublicationsRefereedJournalArticles = 'publications___refereedJournalArticles',
  PublicationsRefereedJournalArticlesAuthors = 'publications___refereedJournalArticles___authors',
  PublicationsRefereedJournalArticlesDate = 'publications___refereedJournalArticles___date',
  PublicationsRefereedJournalArticlesPublicationDoi = 'publications___refereedJournalArticles___publication___doi',
  PublicationsRefereedJournalArticlesPublicationEdition = 'publications___refereedJournalArticles___publication___edition',
  PublicationsRefereedJournalArticlesPublicationPages = 'publications___refereedJournalArticles___publication___pages',
  PublicationsRefereedJournalArticlesPublicationTitle = 'publications___refereedJournalArticles___publication___title',
  PublicationsRefereedJournalArticlesTitle = 'publications___refereedJournalArticles___title',
  PublicationsRefereedJournalArticlesUrl = 'publications___refereedJournalArticles___url',
  References = 'references',
  ReferencesReference = 'references___reference',
  ReviewingExperience = 'reviewingExperience',
  ReviewingExperienceDate = 'reviewingExperience___date',
  ReviewingExperienceTitle = 'reviewingExperience___title',
  SelectedPressAndMedia = 'selectedPressAndMedia',
  SelectedPressAndMediaAuthors = 'selectedPressAndMedia___authors',
  SelectedPressAndMediaDate = 'selectedPressAndMedia___date',
  SelectedPressAndMediaFormattedSource = 'selectedPressAndMedia___formattedSource',
  SelectedPressAndMediaSource = 'selectedPressAndMedia___source',
  SelectedPressAndMediaTitle = 'selectedPressAndMedia___title',
  SelectedPressAndMediaUrl = 'selectedPressAndMedia___url',
  ServiceToProfession = 'serviceToProfession',
  ServiceToProfessionDate = 'serviceToProfession___date',
  ServiceToProfessionTitle = 'serviceToProfession___title',
  TeachingAndSupervisionExperience = 'teachingAndSupervisionExperience',
  TeachingAndSupervisionExperienceCourses = 'teachingAndSupervisionExperience___courses',
  TeachingAndSupervisionExperienceCoursesDate = 'teachingAndSupervisionExperience___courses___date',
  TeachingAndSupervisionExperienceCoursesTitle = 'teachingAndSupervisionExperience___courses___title',
  TeachingAndSupervisionExperienceLocation = 'teachingAndSupervisionExperience___location',
}

export type ContentJsonFieldsFilterInput = {
  collection?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  conferenceParticipation?: Maybe<ContentJsonConferenceParticipationFilterInput>;
  departmentalAndUniversityService?: Maybe<ContentJsonDepartmentalAndUniversityServiceFilterListInput>;
  education?: Maybe<ContentJsonEducationFilterListInput>;
  fields?: Maybe<ContentJsonFieldsFilterInput>;
  grantsAndFellowships?: Maybe<ContentJsonGrantsAndFellowshipsFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  invitedTalks?: Maybe<ContentJsonInvitedTalksFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  professionalAppointments?: Maybe<ContentJsonProfessionalAppointmentsFilterListInput>;
  professionalMemberships?: Maybe<ContentJsonProfessionalMembershipsFilterListInput>;
  publications?: Maybe<ContentJsonPublicationsFilterInput>;
  references?: Maybe<ContentJsonReferencesFilterListInput>;
  reviewingExperience?: Maybe<ContentJsonReviewingExperienceFilterListInput>;
  selectedPressAndMedia?: Maybe<ContentJsonSelectedPressAndMediaFilterListInput>;
  serviceToProfession?: Maybe<ContentJsonServiceToProfessionFilterListInput>;
  teachingAndSupervisionExperience?: Maybe<ContentJsonTeachingAndSupervisionExperienceFilterListInput>;
};

export type ContentJsonFilterListInput = {
  elemMatch?: Maybe<ContentJsonFilterInput>;
};

export type ContentJsonGrantsAndFellowships = {
  __typename?: 'ContentJsonGrantsAndFellowships';
  date?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentJsonGrantsAndFellowshipsDateArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentJsonGrantsAndFellowshipsFilterInput = {
  date?: Maybe<DateQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonGrantsAndFellowshipsFilterListInput = {
  elemMatch?: Maybe<ContentJsonGrantsAndFellowshipsFilterInput>;
};

export type ContentJsonGroupConnection = {
  __typename?: 'ContentJsonGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ContentJsonEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentJsonGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ContentJsonGroupConnectionDistinctArgs = {
  field: ContentJsonFieldsEnum;
};

export type ContentJsonGroupConnectionGroupArgs = {
  field: ContentJsonFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ContentJsonGroupConnectionMaxArgs = {
  field: ContentJsonFieldsEnum;
};

export type ContentJsonGroupConnectionMinArgs = {
  field: ContentJsonFieldsEnum;
};

export type ContentJsonGroupConnectionSumArgs = {
  field: ContentJsonFieldsEnum;
};

export type ContentJsonInvitedTalks = {
  __typename?: 'ContentJsonInvitedTalks';
  authors?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentJsonInvitedTalksFilterInput = {
  authors?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<StringQueryOperatorInput>;
  extra?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonInvitedTalksFilterListInput = {
  elemMatch?: Maybe<ContentJsonInvitedTalksFilterInput>;
};

export type ContentJsonProfessionalAppointments = {
  __typename?: 'ContentJsonProfessionalAppointments';
  date?: Maybe<Scalars['String']>;
  organization?: Maybe<ContentJsonProfessionalAppointmentsOrganization>;
  title?: Maybe<Scalars['String']>;
};

export type ContentJsonProfessionalAppointmentsFilterInput = {
  date?: Maybe<StringQueryOperatorInput>;
  organization?: Maybe<ContentJsonProfessionalAppointmentsOrganizationFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonProfessionalAppointmentsFilterListInput = {
  elemMatch?: Maybe<ContentJsonProfessionalAppointmentsFilterInput>;
};

export type ContentJsonProfessionalAppointmentsOrganization = {
  __typename?: 'ContentJsonProfessionalAppointmentsOrganization';
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentJsonProfessionalAppointmentsOrganizationFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonProfessionalMemberships = {
  __typename?: 'ContentJsonProfessionalMemberships';
  date?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentJsonProfessionalMembershipsDateArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentJsonProfessionalMembershipsFilterInput = {
  date?: Maybe<DateQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonProfessionalMembershipsFilterListInput = {
  elemMatch?: Maybe<ContentJsonProfessionalMembershipsFilterInput>;
};

export type ContentJsonPublications = {
  __typename?: 'ContentJsonPublications';
  bookChapters?: Maybe<Array<Maybe<ContentJsonPublicationsBookChapters>>>;
  books?: Maybe<Array<Maybe<ContentJsonPublicationsBooks>>>;
  conferenceProceedings?: Maybe<
    Array<Maybe<ContentJsonPublicationsConferenceProceedings>>
  >;
  editedVolumes?: Maybe<Array<Maybe<ContentJsonPublicationsEditedVolumes>>>;
  otherPublications?: Maybe<
    Array<Maybe<ContentJsonPublicationsOtherPublications>>
  >;
  refereedJournalArticles?: Maybe<
    Array<Maybe<ContentJsonPublicationsRefereedJournalArticles>>
  >;
};

export type ContentJsonPublicationsBookChapters = {
  __typename?: 'ContentJsonPublicationsBookChapters';
  authors?: Maybe<Scalars['String']>;
  book?: Maybe<ContentJsonPublicationsBookChaptersBook>;
  date?: Maybe<Scalars['Date']>;
  pages?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsBookChaptersDateArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsBookChaptersBook = {
  __typename?: 'ContentJsonPublicationsBookChaptersBook';
  authors?: Maybe<Scalars['String']>;
  pages?: Maybe<Scalars['String']>;
  publisher?: Maybe<ContentJsonPublicationsBookChaptersBookPublisher>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsBookChaptersBookFilterInput = {
  authors?: Maybe<StringQueryOperatorInput>;
  pages?: Maybe<StringQueryOperatorInput>;
  publisher?: Maybe<ContentJsonPublicationsBookChaptersBookPublisherFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonPublicationsBookChaptersBookPublisher = {
  __typename?: 'ContentJsonPublicationsBookChaptersBookPublisher';
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsBookChaptersBookPublisherFilterInput = {
  location?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonPublicationsBookChaptersFilterInput = {
  authors?: Maybe<StringQueryOperatorInput>;
  book?: Maybe<ContentJsonPublicationsBookChaptersBookFilterInput>;
  date?: Maybe<DateQueryOperatorInput>;
  pages?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonPublicationsBookChaptersFilterListInput = {
  elemMatch?: Maybe<ContentJsonPublicationsBookChaptersFilterInput>;
};

export type ContentJsonPublicationsBooks = {
  __typename?: 'ContentJsonPublicationsBooks';
  authors?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  publisher?: Maybe<ContentJsonPublicationsBooksPublisher>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsBooksDateArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsBooksFilterInput = {
  authors?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  publisher?: Maybe<ContentJsonPublicationsBooksPublisherFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonPublicationsBooksFilterListInput = {
  elemMatch?: Maybe<ContentJsonPublicationsBooksFilterInput>;
};

export type ContentJsonPublicationsBooksPublisher = {
  __typename?: 'ContentJsonPublicationsBooksPublisher';
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsBooksPublisherFilterInput = {
  location?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonPublicationsConferenceProceedings = {
  __typename?: 'ContentJsonPublicationsConferenceProceedings';
  authors?: Maybe<Scalars['String']>;
  conference?: Maybe<ContentJsonPublicationsConferenceProceedingsConference>;
  date?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsConferenceProceedingsDateArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsConferenceProceedingsConference = {
  __typename?: 'ContentJsonPublicationsConferenceProceedingsConference';
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsConferenceProceedingsConferenceFilterInput =
  {
    location?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
  };

export type ContentJsonPublicationsConferenceProceedingsFilterInput = {
  authors?: Maybe<StringQueryOperatorInput>;
  conference?: Maybe<ContentJsonPublicationsConferenceProceedingsConferenceFilterInput>;
  date?: Maybe<DateQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonPublicationsConferenceProceedingsFilterListInput = {
  elemMatch?: Maybe<ContentJsonPublicationsConferenceProceedingsFilterInput>;
};

export type ContentJsonPublicationsEditedVolumes = {
  __typename?: 'ContentJsonPublicationsEditedVolumes';
  authors?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  publisher?: Maybe<ContentJsonPublicationsEditedVolumesPublisher>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsEditedVolumesDateArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsEditedVolumesFilterInput = {
  authors?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  publisher?: Maybe<ContentJsonPublicationsEditedVolumesPublisherFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonPublicationsEditedVolumesFilterListInput = {
  elemMatch?: Maybe<ContentJsonPublicationsEditedVolumesFilterInput>;
};

export type ContentJsonPublicationsEditedVolumesPublisher = {
  __typename?: 'ContentJsonPublicationsEditedVolumesPublisher';
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsEditedVolumesPublisherFilterInput = {
  location?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonPublicationsFilterInput = {
  bookChapters?: Maybe<ContentJsonPublicationsBookChaptersFilterListInput>;
  books?: Maybe<ContentJsonPublicationsBooksFilterListInput>;
  conferenceProceedings?: Maybe<ContentJsonPublicationsConferenceProceedingsFilterListInput>;
  editedVolumes?: Maybe<ContentJsonPublicationsEditedVolumesFilterListInput>;
  otherPublications?: Maybe<ContentJsonPublicationsOtherPublicationsFilterListInput>;
  refereedJournalArticles?: Maybe<ContentJsonPublicationsRefereedJournalArticlesFilterListInput>;
};

export type ContentJsonPublicationsOtherPublications = {
  __typename?: 'ContentJsonPublicationsOtherPublications';
  authors?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  publication?: Maybe<ContentJsonPublicationsOtherPublicationsPublication>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsOtherPublicationsFilterInput = {
  authors?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<StringQueryOperatorInput>;
  publication?: Maybe<ContentJsonPublicationsOtherPublicationsPublicationFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonPublicationsOtherPublicationsFilterListInput = {
  elemMatch?: Maybe<ContentJsonPublicationsOtherPublicationsFilterInput>;
};

export type ContentJsonPublicationsOtherPublicationsPublication = {
  __typename?: 'ContentJsonPublicationsOtherPublicationsPublication';
  edition?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  pages?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsOtherPublicationsPublicationFilterInput = {
  edition?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  pages?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonPublicationsRefereedJournalArticles = {
  __typename?: 'ContentJsonPublicationsRefereedJournalArticles';
  authors?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  publication?: Maybe<ContentJsonPublicationsRefereedJournalArticlesPublication>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsRefereedJournalArticlesDateArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsRefereedJournalArticlesFilterInput = {
  authors?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  publication?: Maybe<ContentJsonPublicationsRefereedJournalArticlesPublicationFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonPublicationsRefereedJournalArticlesFilterListInput = {
  elemMatch?: Maybe<ContentJsonPublicationsRefereedJournalArticlesFilterInput>;
};

export type ContentJsonPublicationsRefereedJournalArticlesPublication = {
  __typename?: 'ContentJsonPublicationsRefereedJournalArticlesPublication';
  doi?: Maybe<Scalars['String']>;
  edition?: Maybe<Scalars['String']>;
  pages?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentJsonPublicationsRefereedJournalArticlesPublicationFilterInput =
  {
    doi?: Maybe<StringQueryOperatorInput>;
    edition?: Maybe<StringQueryOperatorInput>;
    pages?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
  };

export type ContentJsonReferences = {
  __typename?: 'ContentJsonReferences';
  reference?: Maybe<Scalars['String']>;
};

export type ContentJsonReferencesFilterInput = {
  reference?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonReferencesFilterListInput = {
  elemMatch?: Maybe<ContentJsonReferencesFilterInput>;
};

export type ContentJsonReviewingExperience = {
  __typename?: 'ContentJsonReviewingExperience';
  date?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentJsonReviewingExperienceFilterInput = {
  date?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonReviewingExperienceFilterListInput = {
  elemMatch?: Maybe<ContentJsonReviewingExperienceFilterInput>;
};

export type ContentJsonSelectedPressAndMedia = {
  __typename?: 'ContentJsonSelectedPressAndMedia';
  authors?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  formattedSource?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentJsonSelectedPressAndMediaFilterInput = {
  authors?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<StringQueryOperatorInput>;
  formattedSource?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonSelectedPressAndMediaFilterListInput = {
  elemMatch?: Maybe<ContentJsonSelectedPressAndMediaFilterInput>;
};

export type ContentJsonServiceToProfession = {
  __typename?: 'ContentJsonServiceToProfession';
  date?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentJsonServiceToProfessionFilterInput = {
  date?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonServiceToProfessionFilterListInput = {
  elemMatch?: Maybe<ContentJsonServiceToProfessionFilterInput>;
};

export type ContentJsonSortInput = {
  fields?: Maybe<Array<Maybe<ContentJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentJsonTeachingAndSupervisionExperience = {
  __typename?: 'ContentJsonTeachingAndSupervisionExperience';
  courses?: Maybe<
    Array<Maybe<ContentJsonTeachingAndSupervisionExperienceCourses>>
  >;
  location?: Maybe<Scalars['String']>;
};

export type ContentJsonTeachingAndSupervisionExperienceCourses = {
  __typename?: 'ContentJsonTeachingAndSupervisionExperienceCourses';
  date?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentJsonTeachingAndSupervisionExperienceCoursesFilterInput = {
  date?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonTeachingAndSupervisionExperienceCoursesFilterListInput =
  {
    elemMatch?: Maybe<ContentJsonTeachingAndSupervisionExperienceCoursesFilterInput>;
  };

export type ContentJsonTeachingAndSupervisionExperienceFilterInput = {
  courses?: Maybe<ContentJsonTeachingAndSupervisionExperienceCoursesFilterListInput>;
  location?: Maybe<StringQueryOperatorInput>;
};

export type ContentJsonTeachingAndSupervisionExperienceFilterListInput = {
  elemMatch?: Maybe<ContentJsonTeachingAndSupervisionExperienceFilterInput>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};

export type DirectoryAccessTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryModifiedTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid',
}

export type DirectoryFilterInput = {
  absolutePath?: Maybe<StringQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type AudioJson or null if there are no children of given type on this node */
  childAudioJson?: Maybe<AudioJson>;
  /** Returns the first child node of type ClientsJson or null if there are no children of given type on this node */
  childClientsJson?: Maybe<ClientsJson>;
  /** Returns the first child node of type ContentJson or null if there are no children of given type on this node */
  childContentJson?: Maybe<ContentJson>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  /** Returns the first child node of type MediaJson or null if there are no children of given type on this node */
  childMediaJson?: Maybe<MediaJson>;
  /** Returns the first child node of type PrintJson or null if there are no children of given type on this node */
  childPrintJson?: Maybe<PrintJson>;
  /** Returns the first child node of type VideoJson or null if there are no children of given type on this node */
  childVideoJson?: Maybe<VideoJson>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type AudioJson */
  childrenAudioJson?: Maybe<Array<Maybe<AudioJson>>>;
  /** Returns all children nodes filtered by type ClientsJson */
  childrenClientsJson?: Maybe<Array<Maybe<ClientsJson>>>;
  /** Returns all children nodes filtered by type ContentJson */
  childrenContentJson?: Maybe<Array<Maybe<ContentJson>>>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns all children nodes filtered by type MediaJson */
  childrenMediaJson?: Maybe<Array<Maybe<MediaJson>>>;
  /** Returns all children nodes filtered by type PrintJson */
  childrenPrintJson?: Maybe<Array<Maybe<PrintJson>>>;
  /** Returns all children nodes filtered by type VideoJson */
  childrenVideoJson?: Maybe<Array<Maybe<VideoJson>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};

export type FileAccessTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileModifiedTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  ChildAudioJsonChildren = 'childAudioJson___children',
  ChildAudioJsonChildrenChildren = 'childAudioJson___children___children',
  ChildAudioJsonChildrenChildrenChildren = 'childAudioJson___children___children___children',
  ChildAudioJsonChildrenChildrenId = 'childAudioJson___children___children___id',
  ChildAudioJsonChildrenId = 'childAudioJson___children___id',
  ChildAudioJsonChildrenInternalContent = 'childAudioJson___children___internal___content',
  ChildAudioJsonChildrenInternalContentDigest = 'childAudioJson___children___internal___contentDigest',
  ChildAudioJsonChildrenInternalDescription = 'childAudioJson___children___internal___description',
  ChildAudioJsonChildrenInternalFieldOwners = 'childAudioJson___children___internal___fieldOwners',
  ChildAudioJsonChildrenInternalIgnoreType = 'childAudioJson___children___internal___ignoreType',
  ChildAudioJsonChildrenInternalMediaType = 'childAudioJson___children___internal___mediaType',
  ChildAudioJsonChildrenInternalOwner = 'childAudioJson___children___internal___owner',
  ChildAudioJsonChildrenInternalType = 'childAudioJson___children___internal___type',
  ChildAudioJsonChildrenParentChildren = 'childAudioJson___children___parent___children',
  ChildAudioJsonChildrenParentId = 'childAudioJson___children___parent___id',
  ChildAudioJsonFieldsCollection = 'childAudioJson___fields___collection',
  ChildAudioJsonId = 'childAudioJson___id',
  ChildAudioJsonInternalContent = 'childAudioJson___internal___content',
  ChildAudioJsonInternalContentDigest = 'childAudioJson___internal___contentDigest',
  ChildAudioJsonInternalDescription = 'childAudioJson___internal___description',
  ChildAudioJsonInternalFieldOwners = 'childAudioJson___internal___fieldOwners',
  ChildAudioJsonInternalIgnoreType = 'childAudioJson___internal___ignoreType',
  ChildAudioJsonInternalMediaType = 'childAudioJson___internal___mediaType',
  ChildAudioJsonInternalOwner = 'childAudioJson___internal___owner',
  ChildAudioJsonInternalType = 'childAudioJson___internal___type',
  ChildAudioJsonParentChildren = 'childAudioJson___parent___children',
  ChildAudioJsonParentChildrenChildren = 'childAudioJson___parent___children___children',
  ChildAudioJsonParentChildrenId = 'childAudioJson___parent___children___id',
  ChildAudioJsonParentId = 'childAudioJson___parent___id',
  ChildAudioJsonParentInternalContent = 'childAudioJson___parent___internal___content',
  ChildAudioJsonParentInternalContentDigest = 'childAudioJson___parent___internal___contentDigest',
  ChildAudioJsonParentInternalDescription = 'childAudioJson___parent___internal___description',
  ChildAudioJsonParentInternalFieldOwners = 'childAudioJson___parent___internal___fieldOwners',
  ChildAudioJsonParentInternalIgnoreType = 'childAudioJson___parent___internal___ignoreType',
  ChildAudioJsonParentInternalMediaType = 'childAudioJson___parent___internal___mediaType',
  ChildAudioJsonParentInternalOwner = 'childAudioJson___parent___internal___owner',
  ChildAudioJsonParentInternalType = 'childAudioJson___parent___internal___type',
  ChildAudioJsonParentParentChildren = 'childAudioJson___parent___parent___children',
  ChildAudioJsonParentParentId = 'childAudioJson___parent___parent___id',
  ChildAudioJsonSource = 'childAudioJson___source',
  ChildAudioJsonTitle = 'childAudioJson___title',
  ChildAudioJsonUrl = 'childAudioJson___url',
  ChildClientsJsonChildren = 'childClientsJson___children',
  ChildClientsJsonChildrenChildren = 'childClientsJson___children___children',
  ChildClientsJsonChildrenChildrenChildren = 'childClientsJson___children___children___children',
  ChildClientsJsonChildrenChildrenId = 'childClientsJson___children___children___id',
  ChildClientsJsonChildrenId = 'childClientsJson___children___id',
  ChildClientsJsonChildrenInternalContent = 'childClientsJson___children___internal___content',
  ChildClientsJsonChildrenInternalContentDigest = 'childClientsJson___children___internal___contentDigest',
  ChildClientsJsonChildrenInternalDescription = 'childClientsJson___children___internal___description',
  ChildClientsJsonChildrenInternalFieldOwners = 'childClientsJson___children___internal___fieldOwners',
  ChildClientsJsonChildrenInternalIgnoreType = 'childClientsJson___children___internal___ignoreType',
  ChildClientsJsonChildrenInternalMediaType = 'childClientsJson___children___internal___mediaType',
  ChildClientsJsonChildrenInternalOwner = 'childClientsJson___children___internal___owner',
  ChildClientsJsonChildrenInternalType = 'childClientsJson___children___internal___type',
  ChildClientsJsonChildrenParentChildren = 'childClientsJson___children___parent___children',
  ChildClientsJsonChildrenParentId = 'childClientsJson___children___parent___id',
  ChildClientsJsonFieldsCollection = 'childClientsJson___fields___collection',
  ChildClientsJsonId = 'childClientsJson___id',
  ChildClientsJsonInternalContent = 'childClientsJson___internal___content',
  ChildClientsJsonInternalContentDigest = 'childClientsJson___internal___contentDigest',
  ChildClientsJsonInternalDescription = 'childClientsJson___internal___description',
  ChildClientsJsonInternalFieldOwners = 'childClientsJson___internal___fieldOwners',
  ChildClientsJsonInternalIgnoreType = 'childClientsJson___internal___ignoreType',
  ChildClientsJsonInternalMediaType = 'childClientsJson___internal___mediaType',
  ChildClientsJsonInternalOwner = 'childClientsJson___internal___owner',
  ChildClientsJsonInternalType = 'childClientsJson___internal___type',
  ChildClientsJsonLogoAbsolutePath = 'childClientsJson___logo___absolutePath',
  ChildClientsJsonLogoAccessTime = 'childClientsJson___logo___accessTime',
  ChildClientsJsonLogoAtime = 'childClientsJson___logo___atime',
  ChildClientsJsonLogoAtimeMs = 'childClientsJson___logo___atimeMs',
  ChildClientsJsonLogoBase = 'childClientsJson___logo___base',
  ChildClientsJsonLogoBirthTime = 'childClientsJson___logo___birthTime',
  ChildClientsJsonLogoBirthtime = 'childClientsJson___logo___birthtime',
  ChildClientsJsonLogoBirthtimeMs = 'childClientsJson___logo___birthtimeMs',
  ChildClientsJsonLogoBlksize = 'childClientsJson___logo___blksize',
  ChildClientsJsonLogoBlocks = 'childClientsJson___logo___blocks',
  ChildClientsJsonLogoChangeTime = 'childClientsJson___logo___changeTime',
  ChildClientsJsonLogoChildAudioJsonChildren = 'childClientsJson___logo___childAudioJson___children',
  ChildClientsJsonLogoChildAudioJsonId = 'childClientsJson___logo___childAudioJson___id',
  ChildClientsJsonLogoChildAudioJsonSource = 'childClientsJson___logo___childAudioJson___source',
  ChildClientsJsonLogoChildAudioJsonTitle = 'childClientsJson___logo___childAudioJson___title',
  ChildClientsJsonLogoChildAudioJsonUrl = 'childClientsJson___logo___childAudioJson___url',
  ChildClientsJsonLogoChildClientsJsonChildren = 'childClientsJson___logo___childClientsJson___children',
  ChildClientsJsonLogoChildClientsJsonId = 'childClientsJson___logo___childClientsJson___id',
  ChildClientsJsonLogoChildClientsJsonName = 'childClientsJson___logo___childClientsJson___name',
  ChildClientsJsonLogoChildClientsJsonUrl = 'childClientsJson___logo___childClientsJson___url',
  ChildClientsJsonLogoChildContentJsonChildren = 'childClientsJson___logo___childContentJson___children',
  ChildClientsJsonLogoChildContentJsonDepartmentalAndUniversityService = 'childClientsJson___logo___childContentJson___departmentalAndUniversityService',
  ChildClientsJsonLogoChildContentJsonEducation = 'childClientsJson___logo___childContentJson___education',
  ChildClientsJsonLogoChildContentJsonGrantsAndFellowships = 'childClientsJson___logo___childContentJson___grantsAndFellowships',
  ChildClientsJsonLogoChildContentJsonId = 'childClientsJson___logo___childContentJson___id',
  ChildClientsJsonLogoChildContentJsonInvitedTalks = 'childClientsJson___logo___childContentJson___invitedTalks',
  ChildClientsJsonLogoChildContentJsonProfessionalAppointments = 'childClientsJson___logo___childContentJson___professionalAppointments',
  ChildClientsJsonLogoChildContentJsonProfessionalMemberships = 'childClientsJson___logo___childContentJson___professionalMemberships',
  ChildClientsJsonLogoChildContentJsonReferences = 'childClientsJson___logo___childContentJson___references',
  ChildClientsJsonLogoChildContentJsonReviewingExperience = 'childClientsJson___logo___childContentJson___reviewingExperience',
  ChildClientsJsonLogoChildContentJsonSelectedPressAndMedia = 'childClientsJson___logo___childContentJson___selectedPressAndMedia',
  ChildClientsJsonLogoChildContentJsonServiceToProfession = 'childClientsJson___logo___childContentJson___serviceToProfession',
  ChildClientsJsonLogoChildContentJsonTeachingAndSupervisionExperience = 'childClientsJson___logo___childContentJson___teachingAndSupervisionExperience',
  ChildClientsJsonLogoChildImageSharpChildren = 'childClientsJson___logo___childImageSharp___children',
  ChildClientsJsonLogoChildImageSharpGatsbyImageData = 'childClientsJson___logo___childImageSharp___gatsbyImageData',
  ChildClientsJsonLogoChildImageSharpId = 'childClientsJson___logo___childImageSharp___id',
  ChildClientsJsonLogoChildMarkdownRemarkChildren = 'childClientsJson___logo___childMarkdownRemark___children',
  ChildClientsJsonLogoChildMarkdownRemarkExcerpt = 'childClientsJson___logo___childMarkdownRemark___excerpt',
  ChildClientsJsonLogoChildMarkdownRemarkExcerptAst = 'childClientsJson___logo___childMarkdownRemark___excerptAst',
  ChildClientsJsonLogoChildMarkdownRemarkFileAbsolutePath = 'childClientsJson___logo___childMarkdownRemark___fileAbsolutePath',
  ChildClientsJsonLogoChildMarkdownRemarkHeadings = 'childClientsJson___logo___childMarkdownRemark___headings',
  ChildClientsJsonLogoChildMarkdownRemarkHtml = 'childClientsJson___logo___childMarkdownRemark___html',
  ChildClientsJsonLogoChildMarkdownRemarkHtmlAst = 'childClientsJson___logo___childMarkdownRemark___htmlAst',
  ChildClientsJsonLogoChildMarkdownRemarkId = 'childClientsJson___logo___childMarkdownRemark___id',
  ChildClientsJsonLogoChildMarkdownRemarkRawMarkdownBody = 'childClientsJson___logo___childMarkdownRemark___rawMarkdownBody',
  ChildClientsJsonLogoChildMarkdownRemarkTableOfContents = 'childClientsJson___logo___childMarkdownRemark___tableOfContents',
  ChildClientsJsonLogoChildMarkdownRemarkTimeToRead = 'childClientsJson___logo___childMarkdownRemark___timeToRead',
  ChildClientsJsonLogoChildMdxBody = 'childClientsJson___logo___childMdx___body',
  ChildClientsJsonLogoChildMdxChildren = 'childClientsJson___logo___childMdx___children',
  ChildClientsJsonLogoChildMdxExcerpt = 'childClientsJson___logo___childMdx___excerpt',
  ChildClientsJsonLogoChildMdxFileAbsolutePath = 'childClientsJson___logo___childMdx___fileAbsolutePath',
  ChildClientsJsonLogoChildMdxHeadings = 'childClientsJson___logo___childMdx___headings',
  ChildClientsJsonLogoChildMdxHtml = 'childClientsJson___logo___childMdx___html',
  ChildClientsJsonLogoChildMdxId = 'childClientsJson___logo___childMdx___id',
  ChildClientsJsonLogoChildMdxMdxAst = 'childClientsJson___logo___childMdx___mdxAST',
  ChildClientsJsonLogoChildMdxRawBody = 'childClientsJson___logo___childMdx___rawBody',
  ChildClientsJsonLogoChildMdxSlug = 'childClientsJson___logo___childMdx___slug',
  ChildClientsJsonLogoChildMdxTableOfContents = 'childClientsJson___logo___childMdx___tableOfContents',
  ChildClientsJsonLogoChildMdxTimeToRead = 'childClientsJson___logo___childMdx___timeToRead',
  ChildClientsJsonLogoChildMediaJsonChildren = 'childClientsJson___logo___childMediaJson___children',
  ChildClientsJsonLogoChildMediaJsonId = 'childClientsJson___logo___childMediaJson___id',
  ChildClientsJsonLogoChildMediaJsonName = 'childClientsJson___logo___childMediaJson___name',
  ChildClientsJsonLogoChildMediaJsonUrl = 'childClientsJson___logo___childMediaJson___url',
  ChildClientsJsonLogoChildPrintJsonChildren = 'childClientsJson___logo___childPrintJson___children',
  ChildClientsJsonLogoChildPrintJsonId = 'childClientsJson___logo___childPrintJson___id',
  ChildClientsJsonLogoChildPrintJsonSource = 'childClientsJson___logo___childPrintJson___source',
  ChildClientsJsonLogoChildPrintJsonThumbnail = 'childClientsJson___logo___childPrintJson___thumbnail',
  ChildClientsJsonLogoChildPrintJsonTitle = 'childClientsJson___logo___childPrintJson___title',
  ChildClientsJsonLogoChildPrintJsonUrl = 'childClientsJson___logo___childPrintJson___url',
  ChildClientsJsonLogoChildVideoJsonChildren = 'childClientsJson___logo___childVideoJson___children',
  ChildClientsJsonLogoChildVideoJsonId = 'childClientsJson___logo___childVideoJson___id',
  ChildClientsJsonLogoChildVideoJsonSource = 'childClientsJson___logo___childVideoJson___source',
  ChildClientsJsonLogoChildVideoJsonTitle = 'childClientsJson___logo___childVideoJson___title',
  ChildClientsJsonLogoChildVideoJsonUrl = 'childClientsJson___logo___childVideoJson___url',
  ChildClientsJsonLogoChildren = 'childClientsJson___logo___children',
  ChildClientsJsonLogoChildrenAudioJson = 'childClientsJson___logo___childrenAudioJson',
  ChildClientsJsonLogoChildrenAudioJsonChildren = 'childClientsJson___logo___childrenAudioJson___children',
  ChildClientsJsonLogoChildrenAudioJsonId = 'childClientsJson___logo___childrenAudioJson___id',
  ChildClientsJsonLogoChildrenAudioJsonSource = 'childClientsJson___logo___childrenAudioJson___source',
  ChildClientsJsonLogoChildrenAudioJsonTitle = 'childClientsJson___logo___childrenAudioJson___title',
  ChildClientsJsonLogoChildrenAudioJsonUrl = 'childClientsJson___logo___childrenAudioJson___url',
  ChildClientsJsonLogoChildrenClientsJson = 'childClientsJson___logo___childrenClientsJson',
  ChildClientsJsonLogoChildrenClientsJsonChildren = 'childClientsJson___logo___childrenClientsJson___children',
  ChildClientsJsonLogoChildrenClientsJsonId = 'childClientsJson___logo___childrenClientsJson___id',
  ChildClientsJsonLogoChildrenClientsJsonName = 'childClientsJson___logo___childrenClientsJson___name',
  ChildClientsJsonLogoChildrenClientsJsonUrl = 'childClientsJson___logo___childrenClientsJson___url',
  ChildClientsJsonLogoChildrenContentJson = 'childClientsJson___logo___childrenContentJson',
  ChildClientsJsonLogoChildrenContentJsonChildren = 'childClientsJson___logo___childrenContentJson___children',
  ChildClientsJsonLogoChildrenContentJsonDepartmentalAndUniversityService = 'childClientsJson___logo___childrenContentJson___departmentalAndUniversityService',
  ChildClientsJsonLogoChildrenContentJsonEducation = 'childClientsJson___logo___childrenContentJson___education',
  ChildClientsJsonLogoChildrenContentJsonGrantsAndFellowships = 'childClientsJson___logo___childrenContentJson___grantsAndFellowships',
  ChildClientsJsonLogoChildrenContentJsonId = 'childClientsJson___logo___childrenContentJson___id',
  ChildClientsJsonLogoChildrenContentJsonInvitedTalks = 'childClientsJson___logo___childrenContentJson___invitedTalks',
  ChildClientsJsonLogoChildrenContentJsonProfessionalAppointments = 'childClientsJson___logo___childrenContentJson___professionalAppointments',
  ChildClientsJsonLogoChildrenContentJsonProfessionalMemberships = 'childClientsJson___logo___childrenContentJson___professionalMemberships',
  ChildClientsJsonLogoChildrenContentJsonReferences = 'childClientsJson___logo___childrenContentJson___references',
  ChildClientsJsonLogoChildrenContentJsonReviewingExperience = 'childClientsJson___logo___childrenContentJson___reviewingExperience',
  ChildClientsJsonLogoChildrenContentJsonSelectedPressAndMedia = 'childClientsJson___logo___childrenContentJson___selectedPressAndMedia',
  ChildClientsJsonLogoChildrenContentJsonServiceToProfession = 'childClientsJson___logo___childrenContentJson___serviceToProfession',
  ChildClientsJsonLogoChildrenContentJsonTeachingAndSupervisionExperience = 'childClientsJson___logo___childrenContentJson___teachingAndSupervisionExperience',
  ChildClientsJsonLogoChildrenImageSharp = 'childClientsJson___logo___childrenImageSharp',
  ChildClientsJsonLogoChildrenImageSharpChildren = 'childClientsJson___logo___childrenImageSharp___children',
  ChildClientsJsonLogoChildrenImageSharpGatsbyImageData = 'childClientsJson___logo___childrenImageSharp___gatsbyImageData',
  ChildClientsJsonLogoChildrenImageSharpId = 'childClientsJson___logo___childrenImageSharp___id',
  ChildClientsJsonLogoChildrenMarkdownRemark = 'childClientsJson___logo___childrenMarkdownRemark',
  ChildClientsJsonLogoChildrenMarkdownRemarkChildren = 'childClientsJson___logo___childrenMarkdownRemark___children',
  ChildClientsJsonLogoChildrenMarkdownRemarkExcerpt = 'childClientsJson___logo___childrenMarkdownRemark___excerpt',
  ChildClientsJsonLogoChildrenMarkdownRemarkExcerptAst = 'childClientsJson___logo___childrenMarkdownRemark___excerptAst',
  ChildClientsJsonLogoChildrenMarkdownRemarkFileAbsolutePath = 'childClientsJson___logo___childrenMarkdownRemark___fileAbsolutePath',
  ChildClientsJsonLogoChildrenMarkdownRemarkHeadings = 'childClientsJson___logo___childrenMarkdownRemark___headings',
  ChildClientsJsonLogoChildrenMarkdownRemarkHtml = 'childClientsJson___logo___childrenMarkdownRemark___html',
  ChildClientsJsonLogoChildrenMarkdownRemarkHtmlAst = 'childClientsJson___logo___childrenMarkdownRemark___htmlAst',
  ChildClientsJsonLogoChildrenMarkdownRemarkId = 'childClientsJson___logo___childrenMarkdownRemark___id',
  ChildClientsJsonLogoChildrenMarkdownRemarkRawMarkdownBody = 'childClientsJson___logo___childrenMarkdownRemark___rawMarkdownBody',
  ChildClientsJsonLogoChildrenMarkdownRemarkTableOfContents = 'childClientsJson___logo___childrenMarkdownRemark___tableOfContents',
  ChildClientsJsonLogoChildrenMarkdownRemarkTimeToRead = 'childClientsJson___logo___childrenMarkdownRemark___timeToRead',
  ChildClientsJsonLogoChildrenMdx = 'childClientsJson___logo___childrenMdx',
  ChildClientsJsonLogoChildrenMdxBody = 'childClientsJson___logo___childrenMdx___body',
  ChildClientsJsonLogoChildrenMdxChildren = 'childClientsJson___logo___childrenMdx___children',
  ChildClientsJsonLogoChildrenMdxExcerpt = 'childClientsJson___logo___childrenMdx___excerpt',
  ChildClientsJsonLogoChildrenMdxFileAbsolutePath = 'childClientsJson___logo___childrenMdx___fileAbsolutePath',
  ChildClientsJsonLogoChildrenMdxHeadings = 'childClientsJson___logo___childrenMdx___headings',
  ChildClientsJsonLogoChildrenMdxHtml = 'childClientsJson___logo___childrenMdx___html',
  ChildClientsJsonLogoChildrenMdxId = 'childClientsJson___logo___childrenMdx___id',
  ChildClientsJsonLogoChildrenMdxMdxAst = 'childClientsJson___logo___childrenMdx___mdxAST',
  ChildClientsJsonLogoChildrenMdxRawBody = 'childClientsJson___logo___childrenMdx___rawBody',
  ChildClientsJsonLogoChildrenMdxSlug = 'childClientsJson___logo___childrenMdx___slug',
  ChildClientsJsonLogoChildrenMdxTableOfContents = 'childClientsJson___logo___childrenMdx___tableOfContents',
  ChildClientsJsonLogoChildrenMdxTimeToRead = 'childClientsJson___logo___childrenMdx___timeToRead',
  ChildClientsJsonLogoChildrenMediaJson = 'childClientsJson___logo___childrenMediaJson',
  ChildClientsJsonLogoChildrenMediaJsonChildren = 'childClientsJson___logo___childrenMediaJson___children',
  ChildClientsJsonLogoChildrenMediaJsonId = 'childClientsJson___logo___childrenMediaJson___id',
  ChildClientsJsonLogoChildrenMediaJsonName = 'childClientsJson___logo___childrenMediaJson___name',
  ChildClientsJsonLogoChildrenMediaJsonUrl = 'childClientsJson___logo___childrenMediaJson___url',
  ChildClientsJsonLogoChildrenPrintJson = 'childClientsJson___logo___childrenPrintJson',
  ChildClientsJsonLogoChildrenPrintJsonChildren = 'childClientsJson___logo___childrenPrintJson___children',
  ChildClientsJsonLogoChildrenPrintJsonId = 'childClientsJson___logo___childrenPrintJson___id',
  ChildClientsJsonLogoChildrenPrintJsonSource = 'childClientsJson___logo___childrenPrintJson___source',
  ChildClientsJsonLogoChildrenPrintJsonThumbnail = 'childClientsJson___logo___childrenPrintJson___thumbnail',
  ChildClientsJsonLogoChildrenPrintJsonTitle = 'childClientsJson___logo___childrenPrintJson___title',
  ChildClientsJsonLogoChildrenPrintJsonUrl = 'childClientsJson___logo___childrenPrintJson___url',
  ChildClientsJsonLogoChildrenVideoJson = 'childClientsJson___logo___childrenVideoJson',
  ChildClientsJsonLogoChildrenVideoJsonChildren = 'childClientsJson___logo___childrenVideoJson___children',
  ChildClientsJsonLogoChildrenVideoJsonId = 'childClientsJson___logo___childrenVideoJson___id',
  ChildClientsJsonLogoChildrenVideoJsonSource = 'childClientsJson___logo___childrenVideoJson___source',
  ChildClientsJsonLogoChildrenVideoJsonTitle = 'childClientsJson___logo___childrenVideoJson___title',
  ChildClientsJsonLogoChildrenVideoJsonUrl = 'childClientsJson___logo___childrenVideoJson___url',
  ChildClientsJsonLogoChildrenChildren = 'childClientsJson___logo___children___children',
  ChildClientsJsonLogoChildrenId = 'childClientsJson___logo___children___id',
  ChildClientsJsonLogoCtime = 'childClientsJson___logo___ctime',
  ChildClientsJsonLogoCtimeMs = 'childClientsJson___logo___ctimeMs',
  ChildClientsJsonLogoDev = 'childClientsJson___logo___dev',
  ChildClientsJsonLogoDir = 'childClientsJson___logo___dir',
  ChildClientsJsonLogoExt = 'childClientsJson___logo___ext',
  ChildClientsJsonLogoExtension = 'childClientsJson___logo___extension',
  ChildClientsJsonLogoGid = 'childClientsJson___logo___gid',
  ChildClientsJsonLogoId = 'childClientsJson___logo___id',
  ChildClientsJsonLogoIno = 'childClientsJson___logo___ino',
  ChildClientsJsonLogoInternalContent = 'childClientsJson___logo___internal___content',
  ChildClientsJsonLogoInternalContentDigest = 'childClientsJson___logo___internal___contentDigest',
  ChildClientsJsonLogoInternalDescription = 'childClientsJson___logo___internal___description',
  ChildClientsJsonLogoInternalFieldOwners = 'childClientsJson___logo___internal___fieldOwners',
  ChildClientsJsonLogoInternalIgnoreType = 'childClientsJson___logo___internal___ignoreType',
  ChildClientsJsonLogoInternalMediaType = 'childClientsJson___logo___internal___mediaType',
  ChildClientsJsonLogoInternalOwner = 'childClientsJson___logo___internal___owner',
  ChildClientsJsonLogoInternalType = 'childClientsJson___logo___internal___type',
  ChildClientsJsonLogoMode = 'childClientsJson___logo___mode',
  ChildClientsJsonLogoModifiedTime = 'childClientsJson___logo___modifiedTime',
  ChildClientsJsonLogoMtime = 'childClientsJson___logo___mtime',
  ChildClientsJsonLogoMtimeMs = 'childClientsJson___logo___mtimeMs',
  ChildClientsJsonLogoName = 'childClientsJson___logo___name',
  ChildClientsJsonLogoNlink = 'childClientsJson___logo___nlink',
  ChildClientsJsonLogoParentChildren = 'childClientsJson___logo___parent___children',
  ChildClientsJsonLogoParentId = 'childClientsJson___logo___parent___id',
  ChildClientsJsonLogoPrettySize = 'childClientsJson___logo___prettySize',
  ChildClientsJsonLogoPublicUrl = 'childClientsJson___logo___publicURL',
  ChildClientsJsonLogoRdev = 'childClientsJson___logo___rdev',
  ChildClientsJsonLogoRelativeDirectory = 'childClientsJson___logo___relativeDirectory',
  ChildClientsJsonLogoRelativePath = 'childClientsJson___logo___relativePath',
  ChildClientsJsonLogoRoot = 'childClientsJson___logo___root',
  ChildClientsJsonLogoSize = 'childClientsJson___logo___size',
  ChildClientsJsonLogoSourceInstanceName = 'childClientsJson___logo___sourceInstanceName',
  ChildClientsJsonLogoUid = 'childClientsJson___logo___uid',
  ChildClientsJsonName = 'childClientsJson___name',
  ChildClientsJsonParentChildren = 'childClientsJson___parent___children',
  ChildClientsJsonParentChildrenChildren = 'childClientsJson___parent___children___children',
  ChildClientsJsonParentChildrenId = 'childClientsJson___parent___children___id',
  ChildClientsJsonParentId = 'childClientsJson___parent___id',
  ChildClientsJsonParentInternalContent = 'childClientsJson___parent___internal___content',
  ChildClientsJsonParentInternalContentDigest = 'childClientsJson___parent___internal___contentDigest',
  ChildClientsJsonParentInternalDescription = 'childClientsJson___parent___internal___description',
  ChildClientsJsonParentInternalFieldOwners = 'childClientsJson___parent___internal___fieldOwners',
  ChildClientsJsonParentInternalIgnoreType = 'childClientsJson___parent___internal___ignoreType',
  ChildClientsJsonParentInternalMediaType = 'childClientsJson___parent___internal___mediaType',
  ChildClientsJsonParentInternalOwner = 'childClientsJson___parent___internal___owner',
  ChildClientsJsonParentInternalType = 'childClientsJson___parent___internal___type',
  ChildClientsJsonParentParentChildren = 'childClientsJson___parent___parent___children',
  ChildClientsJsonParentParentId = 'childClientsJson___parent___parent___id',
  ChildClientsJsonUrl = 'childClientsJson___url',
  ChildContentJsonChildren = 'childContentJson___children',
  ChildContentJsonChildrenChildren = 'childContentJson___children___children',
  ChildContentJsonChildrenChildrenChildren = 'childContentJson___children___children___children',
  ChildContentJsonChildrenChildrenId = 'childContentJson___children___children___id',
  ChildContentJsonChildrenId = 'childContentJson___children___id',
  ChildContentJsonChildrenInternalContent = 'childContentJson___children___internal___content',
  ChildContentJsonChildrenInternalContentDigest = 'childContentJson___children___internal___contentDigest',
  ChildContentJsonChildrenInternalDescription = 'childContentJson___children___internal___description',
  ChildContentJsonChildrenInternalFieldOwners = 'childContentJson___children___internal___fieldOwners',
  ChildContentJsonChildrenInternalIgnoreType = 'childContentJson___children___internal___ignoreType',
  ChildContentJsonChildrenInternalMediaType = 'childContentJson___children___internal___mediaType',
  ChildContentJsonChildrenInternalOwner = 'childContentJson___children___internal___owner',
  ChildContentJsonChildrenInternalType = 'childContentJson___children___internal___type',
  ChildContentJsonChildrenParentChildren = 'childContentJson___children___parent___children',
  ChildContentJsonChildrenParentId = 'childContentJson___children___parent___id',
  ChildContentJsonConferenceParticipationConferencesOrganized = 'childContentJson___conferenceParticipation___conferencesOrganized',
  ChildContentJsonConferenceParticipationConferencesOrganizedDate = 'childContentJson___conferenceParticipation___conferencesOrganized___date',
  ChildContentJsonConferenceParticipationConferencesOrganizedLocation = 'childContentJson___conferenceParticipation___conferencesOrganized___location',
  ChildContentJsonConferenceParticipationConferencesOrganizedTitle = 'childContentJson___conferenceParticipation___conferencesOrganized___title',
  ChildContentJsonConferenceParticipationPanelsOrganized = 'childContentJson___conferenceParticipation___panelsOrganized',
  ChildContentJsonConferenceParticipationPanelsOrganizedAuthors = 'childContentJson___conferenceParticipation___panelsOrganized___authors',
  ChildContentJsonConferenceParticipationPanelsOrganizedDate = 'childContentJson___conferenceParticipation___panelsOrganized___date',
  ChildContentJsonConferenceParticipationPanelsOrganizedExtra = 'childContentJson___conferenceParticipation___panelsOrganized___extra',
  ChildContentJsonConferenceParticipationPanelsOrganizedLocation = 'childContentJson___conferenceParticipation___panelsOrganized___location',
  ChildContentJsonConferenceParticipationPanelsOrganizedLocatoin = 'childContentJson___conferenceParticipation___panelsOrganized___locatoin',
  ChildContentJsonConferenceParticipationPanelsOrganizedTitle = 'childContentJson___conferenceParticipation___panelsOrganized___title',
  ChildContentJsonConferenceParticipationPanelsOrganizedUrl = 'childContentJson___conferenceParticipation___panelsOrganized___url',
  ChildContentJsonConferenceParticipationPapersPresented = 'childContentJson___conferenceParticipation___papersPresented',
  ChildContentJsonConferenceParticipationPapersPresentedAuthors = 'childContentJson___conferenceParticipation___papersPresented___authors',
  ChildContentJsonConferenceParticipationPapersPresentedDate = 'childContentJson___conferenceParticipation___papersPresented___date',
  ChildContentJsonConferenceParticipationPapersPresentedExtra = 'childContentJson___conferenceParticipation___papersPresented___extra',
  ChildContentJsonConferenceParticipationPapersPresentedTitle = 'childContentJson___conferenceParticipation___papersPresented___title',
  ChildContentJsonDepartmentalAndUniversityService = 'childContentJson___departmentalAndUniversityService',
  ChildContentJsonDepartmentalAndUniversityServiceDate = 'childContentJson___departmentalAndUniversityService___date',
  ChildContentJsonDepartmentalAndUniversityServiceTitle = 'childContentJson___departmentalAndUniversityService___title',
  ChildContentJsonEducation = 'childContentJson___education',
  ChildContentJsonEducationDegree = 'childContentJson___education___degree',
  ChildContentJsonEducationSource = 'childContentJson___education___source',
  ChildContentJsonEducationUrl = 'childContentJson___education___url',
  ChildContentJsonEducationYear = 'childContentJson___education___year',
  ChildContentJsonFieldsCollection = 'childContentJson___fields___collection',
  ChildContentJsonGrantsAndFellowships = 'childContentJson___grantsAndFellowships',
  ChildContentJsonGrantsAndFellowshipsDate = 'childContentJson___grantsAndFellowships___date',
  ChildContentJsonGrantsAndFellowshipsTitle = 'childContentJson___grantsAndFellowships___title',
  ChildContentJsonId = 'childContentJson___id',
  ChildContentJsonInternalContent = 'childContentJson___internal___content',
  ChildContentJsonInternalContentDigest = 'childContentJson___internal___contentDigest',
  ChildContentJsonInternalDescription = 'childContentJson___internal___description',
  ChildContentJsonInternalFieldOwners = 'childContentJson___internal___fieldOwners',
  ChildContentJsonInternalIgnoreType = 'childContentJson___internal___ignoreType',
  ChildContentJsonInternalMediaType = 'childContentJson___internal___mediaType',
  ChildContentJsonInternalOwner = 'childContentJson___internal___owner',
  ChildContentJsonInternalType = 'childContentJson___internal___type',
  ChildContentJsonInvitedTalks = 'childContentJson___invitedTalks',
  ChildContentJsonInvitedTalksAuthors = 'childContentJson___invitedTalks___authors',
  ChildContentJsonInvitedTalksDate = 'childContentJson___invitedTalks___date',
  ChildContentJsonInvitedTalksExtra = 'childContentJson___invitedTalks___extra',
  ChildContentJsonInvitedTalksLocation = 'childContentJson___invitedTalks___location',
  ChildContentJsonInvitedTalksTitle = 'childContentJson___invitedTalks___title',
  ChildContentJsonInvitedTalksUrl = 'childContentJson___invitedTalks___url',
  ChildContentJsonParentChildren = 'childContentJson___parent___children',
  ChildContentJsonParentChildrenChildren = 'childContentJson___parent___children___children',
  ChildContentJsonParentChildrenId = 'childContentJson___parent___children___id',
  ChildContentJsonParentId = 'childContentJson___parent___id',
  ChildContentJsonParentInternalContent = 'childContentJson___parent___internal___content',
  ChildContentJsonParentInternalContentDigest = 'childContentJson___parent___internal___contentDigest',
  ChildContentJsonParentInternalDescription = 'childContentJson___parent___internal___description',
  ChildContentJsonParentInternalFieldOwners = 'childContentJson___parent___internal___fieldOwners',
  ChildContentJsonParentInternalIgnoreType = 'childContentJson___parent___internal___ignoreType',
  ChildContentJsonParentInternalMediaType = 'childContentJson___parent___internal___mediaType',
  ChildContentJsonParentInternalOwner = 'childContentJson___parent___internal___owner',
  ChildContentJsonParentInternalType = 'childContentJson___parent___internal___type',
  ChildContentJsonParentParentChildren = 'childContentJson___parent___parent___children',
  ChildContentJsonParentParentId = 'childContentJson___parent___parent___id',
  ChildContentJsonProfessionalAppointments = 'childContentJson___professionalAppointments',
  ChildContentJsonProfessionalAppointmentsDate = 'childContentJson___professionalAppointments___date',
  ChildContentJsonProfessionalAppointmentsOrganizationTitle = 'childContentJson___professionalAppointments___organization___title',
  ChildContentJsonProfessionalAppointmentsOrganizationUrl = 'childContentJson___professionalAppointments___organization___url',
  ChildContentJsonProfessionalAppointmentsTitle = 'childContentJson___professionalAppointments___title',
  ChildContentJsonProfessionalMemberships = 'childContentJson___professionalMemberships',
  ChildContentJsonProfessionalMembershipsDate = 'childContentJson___professionalMemberships___date',
  ChildContentJsonProfessionalMembershipsTitle = 'childContentJson___professionalMemberships___title',
  ChildContentJsonProfessionalMembershipsUrl = 'childContentJson___professionalMemberships___url',
  ChildContentJsonPublicationsBookChapters = 'childContentJson___publications___bookChapters',
  ChildContentJsonPublicationsBookChaptersAuthors = 'childContentJson___publications___bookChapters___authors',
  ChildContentJsonPublicationsBookChaptersDate = 'childContentJson___publications___bookChapters___date',
  ChildContentJsonPublicationsBookChaptersPages = 'childContentJson___publications___bookChapters___pages',
  ChildContentJsonPublicationsBookChaptersTitle = 'childContentJson___publications___bookChapters___title',
  ChildContentJsonPublicationsBooks = 'childContentJson___publications___books',
  ChildContentJsonPublicationsBooksAuthors = 'childContentJson___publications___books___authors',
  ChildContentJsonPublicationsBooksDate = 'childContentJson___publications___books___date',
  ChildContentJsonPublicationsBooksTitle = 'childContentJson___publications___books___title',
  ChildContentJsonPublicationsBooksUrl = 'childContentJson___publications___books___url',
  ChildContentJsonPublicationsConferenceProceedings = 'childContentJson___publications___conferenceProceedings',
  ChildContentJsonPublicationsConferenceProceedingsAuthors = 'childContentJson___publications___conferenceProceedings___authors',
  ChildContentJsonPublicationsConferenceProceedingsDate = 'childContentJson___publications___conferenceProceedings___date',
  ChildContentJsonPublicationsConferenceProceedingsTitle = 'childContentJson___publications___conferenceProceedings___title',
  ChildContentJsonPublicationsConferenceProceedingsUrl = 'childContentJson___publications___conferenceProceedings___url',
  ChildContentJsonPublicationsEditedVolumes = 'childContentJson___publications___editedVolumes',
  ChildContentJsonPublicationsEditedVolumesAuthors = 'childContentJson___publications___editedVolumes___authors',
  ChildContentJsonPublicationsEditedVolumesDate = 'childContentJson___publications___editedVolumes___date',
  ChildContentJsonPublicationsEditedVolumesTitle = 'childContentJson___publications___editedVolumes___title',
  ChildContentJsonPublicationsEditedVolumesUrl = 'childContentJson___publications___editedVolumes___url',
  ChildContentJsonPublicationsOtherPublications = 'childContentJson___publications___otherPublications',
  ChildContentJsonPublicationsOtherPublicationsAuthors = 'childContentJson___publications___otherPublications___authors',
  ChildContentJsonPublicationsOtherPublicationsDate = 'childContentJson___publications___otherPublications___date',
  ChildContentJsonPublicationsOtherPublicationsTitle = 'childContentJson___publications___otherPublications___title',
  ChildContentJsonPublicationsOtherPublicationsUrl = 'childContentJson___publications___otherPublications___url',
  ChildContentJsonPublicationsRefereedJournalArticles = 'childContentJson___publications___refereedJournalArticles',
  ChildContentJsonPublicationsRefereedJournalArticlesAuthors = 'childContentJson___publications___refereedJournalArticles___authors',
  ChildContentJsonPublicationsRefereedJournalArticlesDate = 'childContentJson___publications___refereedJournalArticles___date',
  ChildContentJsonPublicationsRefereedJournalArticlesTitle = 'childContentJson___publications___refereedJournalArticles___title',
  ChildContentJsonPublicationsRefereedJournalArticlesUrl = 'childContentJson___publications___refereedJournalArticles___url',
  ChildContentJsonReferences = 'childContentJson___references',
  ChildContentJsonReferencesReference = 'childContentJson___references___reference',
  ChildContentJsonReviewingExperience = 'childContentJson___reviewingExperience',
  ChildContentJsonReviewingExperienceDate = 'childContentJson___reviewingExperience___date',
  ChildContentJsonReviewingExperienceTitle = 'childContentJson___reviewingExperience___title',
  ChildContentJsonSelectedPressAndMedia = 'childContentJson___selectedPressAndMedia',
  ChildContentJsonSelectedPressAndMediaAuthors = 'childContentJson___selectedPressAndMedia___authors',
  ChildContentJsonSelectedPressAndMediaDate = 'childContentJson___selectedPressAndMedia___date',
  ChildContentJsonSelectedPressAndMediaFormattedSource = 'childContentJson___selectedPressAndMedia___formattedSource',
  ChildContentJsonSelectedPressAndMediaSource = 'childContentJson___selectedPressAndMedia___source',
  ChildContentJsonSelectedPressAndMediaTitle = 'childContentJson___selectedPressAndMedia___title',
  ChildContentJsonSelectedPressAndMediaUrl = 'childContentJson___selectedPressAndMedia___url',
  ChildContentJsonServiceToProfession = 'childContentJson___serviceToProfession',
  ChildContentJsonServiceToProfessionDate = 'childContentJson___serviceToProfession___date',
  ChildContentJsonServiceToProfessionTitle = 'childContentJson___serviceToProfession___title',
  ChildContentJsonTeachingAndSupervisionExperience = 'childContentJson___teachingAndSupervisionExperience',
  ChildContentJsonTeachingAndSupervisionExperienceCourses = 'childContentJson___teachingAndSupervisionExperience___courses',
  ChildContentJsonTeachingAndSupervisionExperienceCoursesDate = 'childContentJson___teachingAndSupervisionExperience___courses___date',
  ChildContentJsonTeachingAndSupervisionExperienceCoursesTitle = 'childContentJson___teachingAndSupervisionExperience___courses___title',
  ChildContentJsonTeachingAndSupervisionExperienceLocation = 'childContentJson___teachingAndSupervisionExperience___location',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpFieldsCollection = 'childImageSharp___fields___collection',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkFieldsCollection = 'childMarkdownRemark___fields___collection',
  ChildMarkdownRemarkFieldsPath = 'childMarkdownRemark___fields___path',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkFieldsTags = 'childMarkdownRemark___fields___tags',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFrontmatterCategory = 'childMarkdownRemark___frontmatter___category',
  ChildMarkdownRemarkFrontmatterCoverAbsolutePath = 'childMarkdownRemark___frontmatter___cover___absolutePath',
  ChildMarkdownRemarkFrontmatterCoverAccessTime = 'childMarkdownRemark___frontmatter___cover___accessTime',
  ChildMarkdownRemarkFrontmatterCoverAtime = 'childMarkdownRemark___frontmatter___cover___atime',
  ChildMarkdownRemarkFrontmatterCoverAtimeMs = 'childMarkdownRemark___frontmatter___cover___atimeMs',
  ChildMarkdownRemarkFrontmatterCoverBase = 'childMarkdownRemark___frontmatter___cover___base',
  ChildMarkdownRemarkFrontmatterCoverBirthTime = 'childMarkdownRemark___frontmatter___cover___birthTime',
  ChildMarkdownRemarkFrontmatterCoverBirthtime = 'childMarkdownRemark___frontmatter___cover___birthtime',
  ChildMarkdownRemarkFrontmatterCoverBirthtimeMs = 'childMarkdownRemark___frontmatter___cover___birthtimeMs',
  ChildMarkdownRemarkFrontmatterCoverBlksize = 'childMarkdownRemark___frontmatter___cover___blksize',
  ChildMarkdownRemarkFrontmatterCoverBlocks = 'childMarkdownRemark___frontmatter___cover___blocks',
  ChildMarkdownRemarkFrontmatterCoverChangeTime = 'childMarkdownRemark___frontmatter___cover___changeTime',
  ChildMarkdownRemarkFrontmatterCoverChildren = 'childMarkdownRemark___frontmatter___cover___children',
  ChildMarkdownRemarkFrontmatterCoverChildrenAudioJson = 'childMarkdownRemark___frontmatter___cover___childrenAudioJson',
  ChildMarkdownRemarkFrontmatterCoverChildrenClientsJson = 'childMarkdownRemark___frontmatter___cover___childrenClientsJson',
  ChildMarkdownRemarkFrontmatterCoverChildrenContentJson = 'childMarkdownRemark___frontmatter___cover___childrenContentJson',
  ChildMarkdownRemarkFrontmatterCoverChildrenImageSharp = 'childMarkdownRemark___frontmatter___cover___childrenImageSharp',
  ChildMarkdownRemarkFrontmatterCoverChildrenMarkdownRemark = 'childMarkdownRemark___frontmatter___cover___childrenMarkdownRemark',
  ChildMarkdownRemarkFrontmatterCoverChildrenMdx = 'childMarkdownRemark___frontmatter___cover___childrenMdx',
  ChildMarkdownRemarkFrontmatterCoverChildrenMediaJson = 'childMarkdownRemark___frontmatter___cover___childrenMediaJson',
  ChildMarkdownRemarkFrontmatterCoverChildrenPrintJson = 'childMarkdownRemark___frontmatter___cover___childrenPrintJson',
  ChildMarkdownRemarkFrontmatterCoverChildrenVideoJson = 'childMarkdownRemark___frontmatter___cover___childrenVideoJson',
  ChildMarkdownRemarkFrontmatterCoverCtime = 'childMarkdownRemark___frontmatter___cover___ctime',
  ChildMarkdownRemarkFrontmatterCoverCtimeMs = 'childMarkdownRemark___frontmatter___cover___ctimeMs',
  ChildMarkdownRemarkFrontmatterCoverDev = 'childMarkdownRemark___frontmatter___cover___dev',
  ChildMarkdownRemarkFrontmatterCoverDir = 'childMarkdownRemark___frontmatter___cover___dir',
  ChildMarkdownRemarkFrontmatterCoverExt = 'childMarkdownRemark___frontmatter___cover___ext',
  ChildMarkdownRemarkFrontmatterCoverExtension = 'childMarkdownRemark___frontmatter___cover___extension',
  ChildMarkdownRemarkFrontmatterCoverGid = 'childMarkdownRemark___frontmatter___cover___gid',
  ChildMarkdownRemarkFrontmatterCoverId = 'childMarkdownRemark___frontmatter___cover___id',
  ChildMarkdownRemarkFrontmatterCoverIno = 'childMarkdownRemark___frontmatter___cover___ino',
  ChildMarkdownRemarkFrontmatterCoverMode = 'childMarkdownRemark___frontmatter___cover___mode',
  ChildMarkdownRemarkFrontmatterCoverModifiedTime = 'childMarkdownRemark___frontmatter___cover___modifiedTime',
  ChildMarkdownRemarkFrontmatterCoverMtime = 'childMarkdownRemark___frontmatter___cover___mtime',
  ChildMarkdownRemarkFrontmatterCoverMtimeMs = 'childMarkdownRemark___frontmatter___cover___mtimeMs',
  ChildMarkdownRemarkFrontmatterCoverName = 'childMarkdownRemark___frontmatter___cover___name',
  ChildMarkdownRemarkFrontmatterCoverNlink = 'childMarkdownRemark___frontmatter___cover___nlink',
  ChildMarkdownRemarkFrontmatterCoverPrettySize = 'childMarkdownRemark___frontmatter___cover___prettySize',
  ChildMarkdownRemarkFrontmatterCoverPublicUrl = 'childMarkdownRemark___frontmatter___cover___publicURL',
  ChildMarkdownRemarkFrontmatterCoverRdev = 'childMarkdownRemark___frontmatter___cover___rdev',
  ChildMarkdownRemarkFrontmatterCoverRelativeDirectory = 'childMarkdownRemark___frontmatter___cover___relativeDirectory',
  ChildMarkdownRemarkFrontmatterCoverRelativePath = 'childMarkdownRemark___frontmatter___cover___relativePath',
  ChildMarkdownRemarkFrontmatterCoverRoot = 'childMarkdownRemark___frontmatter___cover___root',
  ChildMarkdownRemarkFrontmatterCoverSize = 'childMarkdownRemark___frontmatter___cover___size',
  ChildMarkdownRemarkFrontmatterCoverSourceInstanceName = 'childMarkdownRemark___frontmatter___cover___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterCoverUid = 'childMarkdownRemark___frontmatter___cover___uid',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterIsbn10 = 'childMarkdownRemark___frontmatter___isbn10',
  ChildMarkdownRemarkFrontmatterIsbn13 = 'childMarkdownRemark___frontmatter___isbn13',
  ChildMarkdownRemarkFrontmatterLayout = 'childMarkdownRemark___frontmatter___layout',
  ChildMarkdownRemarkFrontmatterProductIdAmazon = 'childMarkdownRemark___frontmatter___productId___amazon',
  ChildMarkdownRemarkFrontmatterProductIdIndiebound = 'childMarkdownRemark___frontmatter___productId___indiebound',
  ChildMarkdownRemarkFrontmatterReviews = 'childMarkdownRemark___frontmatter___reviews',
  ChildMarkdownRemarkFrontmatterReviewsAuthor = 'childMarkdownRemark___frontmatter___reviews___author',
  ChildMarkdownRemarkFrontmatterReviewsAuthorTitle = 'childMarkdownRemark___frontmatter___reviews___authorTitle',
  ChildMarkdownRemarkFrontmatterReviewsText = 'childMarkdownRemark___frontmatter___reviews___text',
  ChildMarkdownRemarkFrontmatterSubtitle = 'childMarkdownRemark___frontmatter___subtitle',
  ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMdxBody = 'childMdx___body',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxFieldsCollection = 'childMdx___fields___collection',
  ChildMdxFieldsSlug = 'childMdx___fields___slug',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxId = 'childMdx___id',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxSlug = 'childMdx___slug',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMediaJsonChildren = 'childMediaJson___children',
  ChildMediaJsonChildrenChildren = 'childMediaJson___children___children',
  ChildMediaJsonChildrenChildrenChildren = 'childMediaJson___children___children___children',
  ChildMediaJsonChildrenChildrenId = 'childMediaJson___children___children___id',
  ChildMediaJsonChildrenId = 'childMediaJson___children___id',
  ChildMediaJsonChildrenInternalContent = 'childMediaJson___children___internal___content',
  ChildMediaJsonChildrenInternalContentDigest = 'childMediaJson___children___internal___contentDigest',
  ChildMediaJsonChildrenInternalDescription = 'childMediaJson___children___internal___description',
  ChildMediaJsonChildrenInternalFieldOwners = 'childMediaJson___children___internal___fieldOwners',
  ChildMediaJsonChildrenInternalIgnoreType = 'childMediaJson___children___internal___ignoreType',
  ChildMediaJsonChildrenInternalMediaType = 'childMediaJson___children___internal___mediaType',
  ChildMediaJsonChildrenInternalOwner = 'childMediaJson___children___internal___owner',
  ChildMediaJsonChildrenInternalType = 'childMediaJson___children___internal___type',
  ChildMediaJsonChildrenParentChildren = 'childMediaJson___children___parent___children',
  ChildMediaJsonChildrenParentId = 'childMediaJson___children___parent___id',
  ChildMediaJsonFieldsCollection = 'childMediaJson___fields___collection',
  ChildMediaJsonId = 'childMediaJson___id',
  ChildMediaJsonInternalContent = 'childMediaJson___internal___content',
  ChildMediaJsonInternalContentDigest = 'childMediaJson___internal___contentDigest',
  ChildMediaJsonInternalDescription = 'childMediaJson___internal___description',
  ChildMediaJsonInternalFieldOwners = 'childMediaJson___internal___fieldOwners',
  ChildMediaJsonInternalIgnoreType = 'childMediaJson___internal___ignoreType',
  ChildMediaJsonInternalMediaType = 'childMediaJson___internal___mediaType',
  ChildMediaJsonInternalOwner = 'childMediaJson___internal___owner',
  ChildMediaJsonInternalType = 'childMediaJson___internal___type',
  ChildMediaJsonLogoAbsolutePath = 'childMediaJson___logo___absolutePath',
  ChildMediaJsonLogoAccessTime = 'childMediaJson___logo___accessTime',
  ChildMediaJsonLogoAtime = 'childMediaJson___logo___atime',
  ChildMediaJsonLogoAtimeMs = 'childMediaJson___logo___atimeMs',
  ChildMediaJsonLogoBase = 'childMediaJson___logo___base',
  ChildMediaJsonLogoBirthTime = 'childMediaJson___logo___birthTime',
  ChildMediaJsonLogoBirthtime = 'childMediaJson___logo___birthtime',
  ChildMediaJsonLogoBirthtimeMs = 'childMediaJson___logo___birthtimeMs',
  ChildMediaJsonLogoBlksize = 'childMediaJson___logo___blksize',
  ChildMediaJsonLogoBlocks = 'childMediaJson___logo___blocks',
  ChildMediaJsonLogoChangeTime = 'childMediaJson___logo___changeTime',
  ChildMediaJsonLogoChildAudioJsonChildren = 'childMediaJson___logo___childAudioJson___children',
  ChildMediaJsonLogoChildAudioJsonId = 'childMediaJson___logo___childAudioJson___id',
  ChildMediaJsonLogoChildAudioJsonSource = 'childMediaJson___logo___childAudioJson___source',
  ChildMediaJsonLogoChildAudioJsonTitle = 'childMediaJson___logo___childAudioJson___title',
  ChildMediaJsonLogoChildAudioJsonUrl = 'childMediaJson___logo___childAudioJson___url',
  ChildMediaJsonLogoChildClientsJsonChildren = 'childMediaJson___logo___childClientsJson___children',
  ChildMediaJsonLogoChildClientsJsonId = 'childMediaJson___logo___childClientsJson___id',
  ChildMediaJsonLogoChildClientsJsonName = 'childMediaJson___logo___childClientsJson___name',
  ChildMediaJsonLogoChildClientsJsonUrl = 'childMediaJson___logo___childClientsJson___url',
  ChildMediaJsonLogoChildContentJsonChildren = 'childMediaJson___logo___childContentJson___children',
  ChildMediaJsonLogoChildContentJsonDepartmentalAndUniversityService = 'childMediaJson___logo___childContentJson___departmentalAndUniversityService',
  ChildMediaJsonLogoChildContentJsonEducation = 'childMediaJson___logo___childContentJson___education',
  ChildMediaJsonLogoChildContentJsonGrantsAndFellowships = 'childMediaJson___logo___childContentJson___grantsAndFellowships',
  ChildMediaJsonLogoChildContentJsonId = 'childMediaJson___logo___childContentJson___id',
  ChildMediaJsonLogoChildContentJsonInvitedTalks = 'childMediaJson___logo___childContentJson___invitedTalks',
  ChildMediaJsonLogoChildContentJsonProfessionalAppointments = 'childMediaJson___logo___childContentJson___professionalAppointments',
  ChildMediaJsonLogoChildContentJsonProfessionalMemberships = 'childMediaJson___logo___childContentJson___professionalMemberships',
  ChildMediaJsonLogoChildContentJsonReferences = 'childMediaJson___logo___childContentJson___references',
  ChildMediaJsonLogoChildContentJsonReviewingExperience = 'childMediaJson___logo___childContentJson___reviewingExperience',
  ChildMediaJsonLogoChildContentJsonSelectedPressAndMedia = 'childMediaJson___logo___childContentJson___selectedPressAndMedia',
  ChildMediaJsonLogoChildContentJsonServiceToProfession = 'childMediaJson___logo___childContentJson___serviceToProfession',
  ChildMediaJsonLogoChildContentJsonTeachingAndSupervisionExperience = 'childMediaJson___logo___childContentJson___teachingAndSupervisionExperience',
  ChildMediaJsonLogoChildImageSharpChildren = 'childMediaJson___logo___childImageSharp___children',
  ChildMediaJsonLogoChildImageSharpGatsbyImageData = 'childMediaJson___logo___childImageSharp___gatsbyImageData',
  ChildMediaJsonLogoChildImageSharpId = 'childMediaJson___logo___childImageSharp___id',
  ChildMediaJsonLogoChildMarkdownRemarkChildren = 'childMediaJson___logo___childMarkdownRemark___children',
  ChildMediaJsonLogoChildMarkdownRemarkExcerpt = 'childMediaJson___logo___childMarkdownRemark___excerpt',
  ChildMediaJsonLogoChildMarkdownRemarkExcerptAst = 'childMediaJson___logo___childMarkdownRemark___excerptAst',
  ChildMediaJsonLogoChildMarkdownRemarkFileAbsolutePath = 'childMediaJson___logo___childMarkdownRemark___fileAbsolutePath',
  ChildMediaJsonLogoChildMarkdownRemarkHeadings = 'childMediaJson___logo___childMarkdownRemark___headings',
  ChildMediaJsonLogoChildMarkdownRemarkHtml = 'childMediaJson___logo___childMarkdownRemark___html',
  ChildMediaJsonLogoChildMarkdownRemarkHtmlAst = 'childMediaJson___logo___childMarkdownRemark___htmlAst',
  ChildMediaJsonLogoChildMarkdownRemarkId = 'childMediaJson___logo___childMarkdownRemark___id',
  ChildMediaJsonLogoChildMarkdownRemarkRawMarkdownBody = 'childMediaJson___logo___childMarkdownRemark___rawMarkdownBody',
  ChildMediaJsonLogoChildMarkdownRemarkTableOfContents = 'childMediaJson___logo___childMarkdownRemark___tableOfContents',
  ChildMediaJsonLogoChildMarkdownRemarkTimeToRead = 'childMediaJson___logo___childMarkdownRemark___timeToRead',
  ChildMediaJsonLogoChildMdxBody = 'childMediaJson___logo___childMdx___body',
  ChildMediaJsonLogoChildMdxChildren = 'childMediaJson___logo___childMdx___children',
  ChildMediaJsonLogoChildMdxExcerpt = 'childMediaJson___logo___childMdx___excerpt',
  ChildMediaJsonLogoChildMdxFileAbsolutePath = 'childMediaJson___logo___childMdx___fileAbsolutePath',
  ChildMediaJsonLogoChildMdxHeadings = 'childMediaJson___logo___childMdx___headings',
  ChildMediaJsonLogoChildMdxHtml = 'childMediaJson___logo___childMdx___html',
  ChildMediaJsonLogoChildMdxId = 'childMediaJson___logo___childMdx___id',
  ChildMediaJsonLogoChildMdxMdxAst = 'childMediaJson___logo___childMdx___mdxAST',
  ChildMediaJsonLogoChildMdxRawBody = 'childMediaJson___logo___childMdx___rawBody',
  ChildMediaJsonLogoChildMdxSlug = 'childMediaJson___logo___childMdx___slug',
  ChildMediaJsonLogoChildMdxTableOfContents = 'childMediaJson___logo___childMdx___tableOfContents',
  ChildMediaJsonLogoChildMdxTimeToRead = 'childMediaJson___logo___childMdx___timeToRead',
  ChildMediaJsonLogoChildMediaJsonChildren = 'childMediaJson___logo___childMediaJson___children',
  ChildMediaJsonLogoChildMediaJsonId = 'childMediaJson___logo___childMediaJson___id',
  ChildMediaJsonLogoChildMediaJsonName = 'childMediaJson___logo___childMediaJson___name',
  ChildMediaJsonLogoChildMediaJsonUrl = 'childMediaJson___logo___childMediaJson___url',
  ChildMediaJsonLogoChildPrintJsonChildren = 'childMediaJson___logo___childPrintJson___children',
  ChildMediaJsonLogoChildPrintJsonId = 'childMediaJson___logo___childPrintJson___id',
  ChildMediaJsonLogoChildPrintJsonSource = 'childMediaJson___logo___childPrintJson___source',
  ChildMediaJsonLogoChildPrintJsonThumbnail = 'childMediaJson___logo___childPrintJson___thumbnail',
  ChildMediaJsonLogoChildPrintJsonTitle = 'childMediaJson___logo___childPrintJson___title',
  ChildMediaJsonLogoChildPrintJsonUrl = 'childMediaJson___logo___childPrintJson___url',
  ChildMediaJsonLogoChildVideoJsonChildren = 'childMediaJson___logo___childVideoJson___children',
  ChildMediaJsonLogoChildVideoJsonId = 'childMediaJson___logo___childVideoJson___id',
  ChildMediaJsonLogoChildVideoJsonSource = 'childMediaJson___logo___childVideoJson___source',
  ChildMediaJsonLogoChildVideoJsonTitle = 'childMediaJson___logo___childVideoJson___title',
  ChildMediaJsonLogoChildVideoJsonUrl = 'childMediaJson___logo___childVideoJson___url',
  ChildMediaJsonLogoChildren = 'childMediaJson___logo___children',
  ChildMediaJsonLogoChildrenAudioJson = 'childMediaJson___logo___childrenAudioJson',
  ChildMediaJsonLogoChildrenAudioJsonChildren = 'childMediaJson___logo___childrenAudioJson___children',
  ChildMediaJsonLogoChildrenAudioJsonId = 'childMediaJson___logo___childrenAudioJson___id',
  ChildMediaJsonLogoChildrenAudioJsonSource = 'childMediaJson___logo___childrenAudioJson___source',
  ChildMediaJsonLogoChildrenAudioJsonTitle = 'childMediaJson___logo___childrenAudioJson___title',
  ChildMediaJsonLogoChildrenAudioJsonUrl = 'childMediaJson___logo___childrenAudioJson___url',
  ChildMediaJsonLogoChildrenClientsJson = 'childMediaJson___logo___childrenClientsJson',
  ChildMediaJsonLogoChildrenClientsJsonChildren = 'childMediaJson___logo___childrenClientsJson___children',
  ChildMediaJsonLogoChildrenClientsJsonId = 'childMediaJson___logo___childrenClientsJson___id',
  ChildMediaJsonLogoChildrenClientsJsonName = 'childMediaJson___logo___childrenClientsJson___name',
  ChildMediaJsonLogoChildrenClientsJsonUrl = 'childMediaJson___logo___childrenClientsJson___url',
  ChildMediaJsonLogoChildrenContentJson = 'childMediaJson___logo___childrenContentJson',
  ChildMediaJsonLogoChildrenContentJsonChildren = 'childMediaJson___logo___childrenContentJson___children',
  ChildMediaJsonLogoChildrenContentJsonDepartmentalAndUniversityService = 'childMediaJson___logo___childrenContentJson___departmentalAndUniversityService',
  ChildMediaJsonLogoChildrenContentJsonEducation = 'childMediaJson___logo___childrenContentJson___education',
  ChildMediaJsonLogoChildrenContentJsonGrantsAndFellowships = 'childMediaJson___logo___childrenContentJson___grantsAndFellowships',
  ChildMediaJsonLogoChildrenContentJsonId = 'childMediaJson___logo___childrenContentJson___id',
  ChildMediaJsonLogoChildrenContentJsonInvitedTalks = 'childMediaJson___logo___childrenContentJson___invitedTalks',
  ChildMediaJsonLogoChildrenContentJsonProfessionalAppointments = 'childMediaJson___logo___childrenContentJson___professionalAppointments',
  ChildMediaJsonLogoChildrenContentJsonProfessionalMemberships = 'childMediaJson___logo___childrenContentJson___professionalMemberships',
  ChildMediaJsonLogoChildrenContentJsonReferences = 'childMediaJson___logo___childrenContentJson___references',
  ChildMediaJsonLogoChildrenContentJsonReviewingExperience = 'childMediaJson___logo___childrenContentJson___reviewingExperience',
  ChildMediaJsonLogoChildrenContentJsonSelectedPressAndMedia = 'childMediaJson___logo___childrenContentJson___selectedPressAndMedia',
  ChildMediaJsonLogoChildrenContentJsonServiceToProfession = 'childMediaJson___logo___childrenContentJson___serviceToProfession',
  ChildMediaJsonLogoChildrenContentJsonTeachingAndSupervisionExperience = 'childMediaJson___logo___childrenContentJson___teachingAndSupervisionExperience',
  ChildMediaJsonLogoChildrenImageSharp = 'childMediaJson___logo___childrenImageSharp',
  ChildMediaJsonLogoChildrenImageSharpChildren = 'childMediaJson___logo___childrenImageSharp___children',
  ChildMediaJsonLogoChildrenImageSharpGatsbyImageData = 'childMediaJson___logo___childrenImageSharp___gatsbyImageData',
  ChildMediaJsonLogoChildrenImageSharpId = 'childMediaJson___logo___childrenImageSharp___id',
  ChildMediaJsonLogoChildrenMarkdownRemark = 'childMediaJson___logo___childrenMarkdownRemark',
  ChildMediaJsonLogoChildrenMarkdownRemarkChildren = 'childMediaJson___logo___childrenMarkdownRemark___children',
  ChildMediaJsonLogoChildrenMarkdownRemarkExcerpt = 'childMediaJson___logo___childrenMarkdownRemark___excerpt',
  ChildMediaJsonLogoChildrenMarkdownRemarkExcerptAst = 'childMediaJson___logo___childrenMarkdownRemark___excerptAst',
  ChildMediaJsonLogoChildrenMarkdownRemarkFileAbsolutePath = 'childMediaJson___logo___childrenMarkdownRemark___fileAbsolutePath',
  ChildMediaJsonLogoChildrenMarkdownRemarkHeadings = 'childMediaJson___logo___childrenMarkdownRemark___headings',
  ChildMediaJsonLogoChildrenMarkdownRemarkHtml = 'childMediaJson___logo___childrenMarkdownRemark___html',
  ChildMediaJsonLogoChildrenMarkdownRemarkHtmlAst = 'childMediaJson___logo___childrenMarkdownRemark___htmlAst',
  ChildMediaJsonLogoChildrenMarkdownRemarkId = 'childMediaJson___logo___childrenMarkdownRemark___id',
  ChildMediaJsonLogoChildrenMarkdownRemarkRawMarkdownBody = 'childMediaJson___logo___childrenMarkdownRemark___rawMarkdownBody',
  ChildMediaJsonLogoChildrenMarkdownRemarkTableOfContents = 'childMediaJson___logo___childrenMarkdownRemark___tableOfContents',
  ChildMediaJsonLogoChildrenMarkdownRemarkTimeToRead = 'childMediaJson___logo___childrenMarkdownRemark___timeToRead',
  ChildMediaJsonLogoChildrenMdx = 'childMediaJson___logo___childrenMdx',
  ChildMediaJsonLogoChildrenMdxBody = 'childMediaJson___logo___childrenMdx___body',
  ChildMediaJsonLogoChildrenMdxChildren = 'childMediaJson___logo___childrenMdx___children',
  ChildMediaJsonLogoChildrenMdxExcerpt = 'childMediaJson___logo___childrenMdx___excerpt',
  ChildMediaJsonLogoChildrenMdxFileAbsolutePath = 'childMediaJson___logo___childrenMdx___fileAbsolutePath',
  ChildMediaJsonLogoChildrenMdxHeadings = 'childMediaJson___logo___childrenMdx___headings',
  ChildMediaJsonLogoChildrenMdxHtml = 'childMediaJson___logo___childrenMdx___html',
  ChildMediaJsonLogoChildrenMdxId = 'childMediaJson___logo___childrenMdx___id',
  ChildMediaJsonLogoChildrenMdxMdxAst = 'childMediaJson___logo___childrenMdx___mdxAST',
  ChildMediaJsonLogoChildrenMdxRawBody = 'childMediaJson___logo___childrenMdx___rawBody',
  ChildMediaJsonLogoChildrenMdxSlug = 'childMediaJson___logo___childrenMdx___slug',
  ChildMediaJsonLogoChildrenMdxTableOfContents = 'childMediaJson___logo___childrenMdx___tableOfContents',
  ChildMediaJsonLogoChildrenMdxTimeToRead = 'childMediaJson___logo___childrenMdx___timeToRead',
  ChildMediaJsonLogoChildrenMediaJson = 'childMediaJson___logo___childrenMediaJson',
  ChildMediaJsonLogoChildrenMediaJsonChildren = 'childMediaJson___logo___childrenMediaJson___children',
  ChildMediaJsonLogoChildrenMediaJsonId = 'childMediaJson___logo___childrenMediaJson___id',
  ChildMediaJsonLogoChildrenMediaJsonName = 'childMediaJson___logo___childrenMediaJson___name',
  ChildMediaJsonLogoChildrenMediaJsonUrl = 'childMediaJson___logo___childrenMediaJson___url',
  ChildMediaJsonLogoChildrenPrintJson = 'childMediaJson___logo___childrenPrintJson',
  ChildMediaJsonLogoChildrenPrintJsonChildren = 'childMediaJson___logo___childrenPrintJson___children',
  ChildMediaJsonLogoChildrenPrintJsonId = 'childMediaJson___logo___childrenPrintJson___id',
  ChildMediaJsonLogoChildrenPrintJsonSource = 'childMediaJson___logo___childrenPrintJson___source',
  ChildMediaJsonLogoChildrenPrintJsonThumbnail = 'childMediaJson___logo___childrenPrintJson___thumbnail',
  ChildMediaJsonLogoChildrenPrintJsonTitle = 'childMediaJson___logo___childrenPrintJson___title',
  ChildMediaJsonLogoChildrenPrintJsonUrl = 'childMediaJson___logo___childrenPrintJson___url',
  ChildMediaJsonLogoChildrenVideoJson = 'childMediaJson___logo___childrenVideoJson',
  ChildMediaJsonLogoChildrenVideoJsonChildren = 'childMediaJson___logo___childrenVideoJson___children',
  ChildMediaJsonLogoChildrenVideoJsonId = 'childMediaJson___logo___childrenVideoJson___id',
  ChildMediaJsonLogoChildrenVideoJsonSource = 'childMediaJson___logo___childrenVideoJson___source',
  ChildMediaJsonLogoChildrenVideoJsonTitle = 'childMediaJson___logo___childrenVideoJson___title',
  ChildMediaJsonLogoChildrenVideoJsonUrl = 'childMediaJson___logo___childrenVideoJson___url',
  ChildMediaJsonLogoChildrenChildren = 'childMediaJson___logo___children___children',
  ChildMediaJsonLogoChildrenId = 'childMediaJson___logo___children___id',
  ChildMediaJsonLogoCtime = 'childMediaJson___logo___ctime',
  ChildMediaJsonLogoCtimeMs = 'childMediaJson___logo___ctimeMs',
  ChildMediaJsonLogoDev = 'childMediaJson___logo___dev',
  ChildMediaJsonLogoDir = 'childMediaJson___logo___dir',
  ChildMediaJsonLogoExt = 'childMediaJson___logo___ext',
  ChildMediaJsonLogoExtension = 'childMediaJson___logo___extension',
  ChildMediaJsonLogoGid = 'childMediaJson___logo___gid',
  ChildMediaJsonLogoId = 'childMediaJson___logo___id',
  ChildMediaJsonLogoIno = 'childMediaJson___logo___ino',
  ChildMediaJsonLogoInternalContent = 'childMediaJson___logo___internal___content',
  ChildMediaJsonLogoInternalContentDigest = 'childMediaJson___logo___internal___contentDigest',
  ChildMediaJsonLogoInternalDescription = 'childMediaJson___logo___internal___description',
  ChildMediaJsonLogoInternalFieldOwners = 'childMediaJson___logo___internal___fieldOwners',
  ChildMediaJsonLogoInternalIgnoreType = 'childMediaJson___logo___internal___ignoreType',
  ChildMediaJsonLogoInternalMediaType = 'childMediaJson___logo___internal___mediaType',
  ChildMediaJsonLogoInternalOwner = 'childMediaJson___logo___internal___owner',
  ChildMediaJsonLogoInternalType = 'childMediaJson___logo___internal___type',
  ChildMediaJsonLogoMode = 'childMediaJson___logo___mode',
  ChildMediaJsonLogoModifiedTime = 'childMediaJson___logo___modifiedTime',
  ChildMediaJsonLogoMtime = 'childMediaJson___logo___mtime',
  ChildMediaJsonLogoMtimeMs = 'childMediaJson___logo___mtimeMs',
  ChildMediaJsonLogoName = 'childMediaJson___logo___name',
  ChildMediaJsonLogoNlink = 'childMediaJson___logo___nlink',
  ChildMediaJsonLogoParentChildren = 'childMediaJson___logo___parent___children',
  ChildMediaJsonLogoParentId = 'childMediaJson___logo___parent___id',
  ChildMediaJsonLogoPrettySize = 'childMediaJson___logo___prettySize',
  ChildMediaJsonLogoPublicUrl = 'childMediaJson___logo___publicURL',
  ChildMediaJsonLogoRdev = 'childMediaJson___logo___rdev',
  ChildMediaJsonLogoRelativeDirectory = 'childMediaJson___logo___relativeDirectory',
  ChildMediaJsonLogoRelativePath = 'childMediaJson___logo___relativePath',
  ChildMediaJsonLogoRoot = 'childMediaJson___logo___root',
  ChildMediaJsonLogoSize = 'childMediaJson___logo___size',
  ChildMediaJsonLogoSourceInstanceName = 'childMediaJson___logo___sourceInstanceName',
  ChildMediaJsonLogoUid = 'childMediaJson___logo___uid',
  ChildMediaJsonName = 'childMediaJson___name',
  ChildMediaJsonParentChildren = 'childMediaJson___parent___children',
  ChildMediaJsonParentChildrenChildren = 'childMediaJson___parent___children___children',
  ChildMediaJsonParentChildrenId = 'childMediaJson___parent___children___id',
  ChildMediaJsonParentId = 'childMediaJson___parent___id',
  ChildMediaJsonParentInternalContent = 'childMediaJson___parent___internal___content',
  ChildMediaJsonParentInternalContentDigest = 'childMediaJson___parent___internal___contentDigest',
  ChildMediaJsonParentInternalDescription = 'childMediaJson___parent___internal___description',
  ChildMediaJsonParentInternalFieldOwners = 'childMediaJson___parent___internal___fieldOwners',
  ChildMediaJsonParentInternalIgnoreType = 'childMediaJson___parent___internal___ignoreType',
  ChildMediaJsonParentInternalMediaType = 'childMediaJson___parent___internal___mediaType',
  ChildMediaJsonParentInternalOwner = 'childMediaJson___parent___internal___owner',
  ChildMediaJsonParentInternalType = 'childMediaJson___parent___internal___type',
  ChildMediaJsonParentParentChildren = 'childMediaJson___parent___parent___children',
  ChildMediaJsonParentParentId = 'childMediaJson___parent___parent___id',
  ChildMediaJsonUrl = 'childMediaJson___url',
  ChildPrintJsonChildren = 'childPrintJson___children',
  ChildPrintJsonChildrenChildren = 'childPrintJson___children___children',
  ChildPrintJsonChildrenChildrenChildren = 'childPrintJson___children___children___children',
  ChildPrintJsonChildrenChildrenId = 'childPrintJson___children___children___id',
  ChildPrintJsonChildrenId = 'childPrintJson___children___id',
  ChildPrintJsonChildrenInternalContent = 'childPrintJson___children___internal___content',
  ChildPrintJsonChildrenInternalContentDigest = 'childPrintJson___children___internal___contentDigest',
  ChildPrintJsonChildrenInternalDescription = 'childPrintJson___children___internal___description',
  ChildPrintJsonChildrenInternalFieldOwners = 'childPrintJson___children___internal___fieldOwners',
  ChildPrintJsonChildrenInternalIgnoreType = 'childPrintJson___children___internal___ignoreType',
  ChildPrintJsonChildrenInternalMediaType = 'childPrintJson___children___internal___mediaType',
  ChildPrintJsonChildrenInternalOwner = 'childPrintJson___children___internal___owner',
  ChildPrintJsonChildrenInternalType = 'childPrintJson___children___internal___type',
  ChildPrintJsonChildrenParentChildren = 'childPrintJson___children___parent___children',
  ChildPrintJsonChildrenParentId = 'childPrintJson___children___parent___id',
  ChildPrintJsonFieldsCollection = 'childPrintJson___fields___collection',
  ChildPrintJsonId = 'childPrintJson___id',
  ChildPrintJsonInternalContent = 'childPrintJson___internal___content',
  ChildPrintJsonInternalContentDigest = 'childPrintJson___internal___contentDigest',
  ChildPrintJsonInternalDescription = 'childPrintJson___internal___description',
  ChildPrintJsonInternalFieldOwners = 'childPrintJson___internal___fieldOwners',
  ChildPrintJsonInternalIgnoreType = 'childPrintJson___internal___ignoreType',
  ChildPrintJsonInternalMediaType = 'childPrintJson___internal___mediaType',
  ChildPrintJsonInternalOwner = 'childPrintJson___internal___owner',
  ChildPrintJsonInternalType = 'childPrintJson___internal___type',
  ChildPrintJsonParentChildren = 'childPrintJson___parent___children',
  ChildPrintJsonParentChildrenChildren = 'childPrintJson___parent___children___children',
  ChildPrintJsonParentChildrenId = 'childPrintJson___parent___children___id',
  ChildPrintJsonParentId = 'childPrintJson___parent___id',
  ChildPrintJsonParentInternalContent = 'childPrintJson___parent___internal___content',
  ChildPrintJsonParentInternalContentDigest = 'childPrintJson___parent___internal___contentDigest',
  ChildPrintJsonParentInternalDescription = 'childPrintJson___parent___internal___description',
  ChildPrintJsonParentInternalFieldOwners = 'childPrintJson___parent___internal___fieldOwners',
  ChildPrintJsonParentInternalIgnoreType = 'childPrintJson___parent___internal___ignoreType',
  ChildPrintJsonParentInternalMediaType = 'childPrintJson___parent___internal___mediaType',
  ChildPrintJsonParentInternalOwner = 'childPrintJson___parent___internal___owner',
  ChildPrintJsonParentInternalType = 'childPrintJson___parent___internal___type',
  ChildPrintJsonParentParentChildren = 'childPrintJson___parent___parent___children',
  ChildPrintJsonParentParentId = 'childPrintJson___parent___parent___id',
  ChildPrintJsonSource = 'childPrintJson___source',
  ChildPrintJsonThumbnail = 'childPrintJson___thumbnail',
  ChildPrintJsonTitle = 'childPrintJson___title',
  ChildPrintJsonUrl = 'childPrintJson___url',
  ChildVideoJsonChildren = 'childVideoJson___children',
  ChildVideoJsonChildrenChildren = 'childVideoJson___children___children',
  ChildVideoJsonChildrenChildrenChildren = 'childVideoJson___children___children___children',
  ChildVideoJsonChildrenChildrenId = 'childVideoJson___children___children___id',
  ChildVideoJsonChildrenId = 'childVideoJson___children___id',
  ChildVideoJsonChildrenInternalContent = 'childVideoJson___children___internal___content',
  ChildVideoJsonChildrenInternalContentDigest = 'childVideoJson___children___internal___contentDigest',
  ChildVideoJsonChildrenInternalDescription = 'childVideoJson___children___internal___description',
  ChildVideoJsonChildrenInternalFieldOwners = 'childVideoJson___children___internal___fieldOwners',
  ChildVideoJsonChildrenInternalIgnoreType = 'childVideoJson___children___internal___ignoreType',
  ChildVideoJsonChildrenInternalMediaType = 'childVideoJson___children___internal___mediaType',
  ChildVideoJsonChildrenInternalOwner = 'childVideoJson___children___internal___owner',
  ChildVideoJsonChildrenInternalType = 'childVideoJson___children___internal___type',
  ChildVideoJsonChildrenParentChildren = 'childVideoJson___children___parent___children',
  ChildVideoJsonChildrenParentId = 'childVideoJson___children___parent___id',
  ChildVideoJsonFieldsCollection = 'childVideoJson___fields___collection',
  ChildVideoJsonId = 'childVideoJson___id',
  ChildVideoJsonInternalContent = 'childVideoJson___internal___content',
  ChildVideoJsonInternalContentDigest = 'childVideoJson___internal___contentDigest',
  ChildVideoJsonInternalDescription = 'childVideoJson___internal___description',
  ChildVideoJsonInternalFieldOwners = 'childVideoJson___internal___fieldOwners',
  ChildVideoJsonInternalIgnoreType = 'childVideoJson___internal___ignoreType',
  ChildVideoJsonInternalMediaType = 'childVideoJson___internal___mediaType',
  ChildVideoJsonInternalOwner = 'childVideoJson___internal___owner',
  ChildVideoJsonInternalType = 'childVideoJson___internal___type',
  ChildVideoJsonParentChildren = 'childVideoJson___parent___children',
  ChildVideoJsonParentChildrenChildren = 'childVideoJson___parent___children___children',
  ChildVideoJsonParentChildrenId = 'childVideoJson___parent___children___id',
  ChildVideoJsonParentId = 'childVideoJson___parent___id',
  ChildVideoJsonParentInternalContent = 'childVideoJson___parent___internal___content',
  ChildVideoJsonParentInternalContentDigest = 'childVideoJson___parent___internal___contentDigest',
  ChildVideoJsonParentInternalDescription = 'childVideoJson___parent___internal___description',
  ChildVideoJsonParentInternalFieldOwners = 'childVideoJson___parent___internal___fieldOwners',
  ChildVideoJsonParentInternalIgnoreType = 'childVideoJson___parent___internal___ignoreType',
  ChildVideoJsonParentInternalMediaType = 'childVideoJson___parent___internal___mediaType',
  ChildVideoJsonParentInternalOwner = 'childVideoJson___parent___internal___owner',
  ChildVideoJsonParentInternalType = 'childVideoJson___parent___internal___type',
  ChildVideoJsonParentParentChildren = 'childVideoJson___parent___parent___children',
  ChildVideoJsonParentParentId = 'childVideoJson___parent___parent___id',
  ChildVideoJsonSource = 'childVideoJson___source',
  ChildVideoJsonTitle = 'childVideoJson___title',
  ChildVideoJsonUrl = 'childVideoJson___url',
  Children = 'children',
  ChildrenAudioJson = 'childrenAudioJson',
  ChildrenAudioJsonChildren = 'childrenAudioJson___children',
  ChildrenAudioJsonChildrenChildren = 'childrenAudioJson___children___children',
  ChildrenAudioJsonChildrenChildrenChildren = 'childrenAudioJson___children___children___children',
  ChildrenAudioJsonChildrenChildrenId = 'childrenAudioJson___children___children___id',
  ChildrenAudioJsonChildrenId = 'childrenAudioJson___children___id',
  ChildrenAudioJsonChildrenInternalContent = 'childrenAudioJson___children___internal___content',
  ChildrenAudioJsonChildrenInternalContentDigest = 'childrenAudioJson___children___internal___contentDigest',
  ChildrenAudioJsonChildrenInternalDescription = 'childrenAudioJson___children___internal___description',
  ChildrenAudioJsonChildrenInternalFieldOwners = 'childrenAudioJson___children___internal___fieldOwners',
  ChildrenAudioJsonChildrenInternalIgnoreType = 'childrenAudioJson___children___internal___ignoreType',
  ChildrenAudioJsonChildrenInternalMediaType = 'childrenAudioJson___children___internal___mediaType',
  ChildrenAudioJsonChildrenInternalOwner = 'childrenAudioJson___children___internal___owner',
  ChildrenAudioJsonChildrenInternalType = 'childrenAudioJson___children___internal___type',
  ChildrenAudioJsonChildrenParentChildren = 'childrenAudioJson___children___parent___children',
  ChildrenAudioJsonChildrenParentId = 'childrenAudioJson___children___parent___id',
  ChildrenAudioJsonFieldsCollection = 'childrenAudioJson___fields___collection',
  ChildrenAudioJsonId = 'childrenAudioJson___id',
  ChildrenAudioJsonInternalContent = 'childrenAudioJson___internal___content',
  ChildrenAudioJsonInternalContentDigest = 'childrenAudioJson___internal___contentDigest',
  ChildrenAudioJsonInternalDescription = 'childrenAudioJson___internal___description',
  ChildrenAudioJsonInternalFieldOwners = 'childrenAudioJson___internal___fieldOwners',
  ChildrenAudioJsonInternalIgnoreType = 'childrenAudioJson___internal___ignoreType',
  ChildrenAudioJsonInternalMediaType = 'childrenAudioJson___internal___mediaType',
  ChildrenAudioJsonInternalOwner = 'childrenAudioJson___internal___owner',
  ChildrenAudioJsonInternalType = 'childrenAudioJson___internal___type',
  ChildrenAudioJsonParentChildren = 'childrenAudioJson___parent___children',
  ChildrenAudioJsonParentChildrenChildren = 'childrenAudioJson___parent___children___children',
  ChildrenAudioJsonParentChildrenId = 'childrenAudioJson___parent___children___id',
  ChildrenAudioJsonParentId = 'childrenAudioJson___parent___id',
  ChildrenAudioJsonParentInternalContent = 'childrenAudioJson___parent___internal___content',
  ChildrenAudioJsonParentInternalContentDigest = 'childrenAudioJson___parent___internal___contentDigest',
  ChildrenAudioJsonParentInternalDescription = 'childrenAudioJson___parent___internal___description',
  ChildrenAudioJsonParentInternalFieldOwners = 'childrenAudioJson___parent___internal___fieldOwners',
  ChildrenAudioJsonParentInternalIgnoreType = 'childrenAudioJson___parent___internal___ignoreType',
  ChildrenAudioJsonParentInternalMediaType = 'childrenAudioJson___parent___internal___mediaType',
  ChildrenAudioJsonParentInternalOwner = 'childrenAudioJson___parent___internal___owner',
  ChildrenAudioJsonParentInternalType = 'childrenAudioJson___parent___internal___type',
  ChildrenAudioJsonParentParentChildren = 'childrenAudioJson___parent___parent___children',
  ChildrenAudioJsonParentParentId = 'childrenAudioJson___parent___parent___id',
  ChildrenAudioJsonSource = 'childrenAudioJson___source',
  ChildrenAudioJsonTitle = 'childrenAudioJson___title',
  ChildrenAudioJsonUrl = 'childrenAudioJson___url',
  ChildrenClientsJson = 'childrenClientsJson',
  ChildrenClientsJsonChildren = 'childrenClientsJson___children',
  ChildrenClientsJsonChildrenChildren = 'childrenClientsJson___children___children',
  ChildrenClientsJsonChildrenChildrenChildren = 'childrenClientsJson___children___children___children',
  ChildrenClientsJsonChildrenChildrenId = 'childrenClientsJson___children___children___id',
  ChildrenClientsJsonChildrenId = 'childrenClientsJson___children___id',
  ChildrenClientsJsonChildrenInternalContent = 'childrenClientsJson___children___internal___content',
  ChildrenClientsJsonChildrenInternalContentDigest = 'childrenClientsJson___children___internal___contentDigest',
  ChildrenClientsJsonChildrenInternalDescription = 'childrenClientsJson___children___internal___description',
  ChildrenClientsJsonChildrenInternalFieldOwners = 'childrenClientsJson___children___internal___fieldOwners',
  ChildrenClientsJsonChildrenInternalIgnoreType = 'childrenClientsJson___children___internal___ignoreType',
  ChildrenClientsJsonChildrenInternalMediaType = 'childrenClientsJson___children___internal___mediaType',
  ChildrenClientsJsonChildrenInternalOwner = 'childrenClientsJson___children___internal___owner',
  ChildrenClientsJsonChildrenInternalType = 'childrenClientsJson___children___internal___type',
  ChildrenClientsJsonChildrenParentChildren = 'childrenClientsJson___children___parent___children',
  ChildrenClientsJsonChildrenParentId = 'childrenClientsJson___children___parent___id',
  ChildrenClientsJsonFieldsCollection = 'childrenClientsJson___fields___collection',
  ChildrenClientsJsonId = 'childrenClientsJson___id',
  ChildrenClientsJsonInternalContent = 'childrenClientsJson___internal___content',
  ChildrenClientsJsonInternalContentDigest = 'childrenClientsJson___internal___contentDigest',
  ChildrenClientsJsonInternalDescription = 'childrenClientsJson___internal___description',
  ChildrenClientsJsonInternalFieldOwners = 'childrenClientsJson___internal___fieldOwners',
  ChildrenClientsJsonInternalIgnoreType = 'childrenClientsJson___internal___ignoreType',
  ChildrenClientsJsonInternalMediaType = 'childrenClientsJson___internal___mediaType',
  ChildrenClientsJsonInternalOwner = 'childrenClientsJson___internal___owner',
  ChildrenClientsJsonInternalType = 'childrenClientsJson___internal___type',
  ChildrenClientsJsonLogoAbsolutePath = 'childrenClientsJson___logo___absolutePath',
  ChildrenClientsJsonLogoAccessTime = 'childrenClientsJson___logo___accessTime',
  ChildrenClientsJsonLogoAtime = 'childrenClientsJson___logo___atime',
  ChildrenClientsJsonLogoAtimeMs = 'childrenClientsJson___logo___atimeMs',
  ChildrenClientsJsonLogoBase = 'childrenClientsJson___logo___base',
  ChildrenClientsJsonLogoBirthTime = 'childrenClientsJson___logo___birthTime',
  ChildrenClientsJsonLogoBirthtime = 'childrenClientsJson___logo___birthtime',
  ChildrenClientsJsonLogoBirthtimeMs = 'childrenClientsJson___logo___birthtimeMs',
  ChildrenClientsJsonLogoBlksize = 'childrenClientsJson___logo___blksize',
  ChildrenClientsJsonLogoBlocks = 'childrenClientsJson___logo___blocks',
  ChildrenClientsJsonLogoChangeTime = 'childrenClientsJson___logo___changeTime',
  ChildrenClientsJsonLogoChildAudioJsonChildren = 'childrenClientsJson___logo___childAudioJson___children',
  ChildrenClientsJsonLogoChildAudioJsonId = 'childrenClientsJson___logo___childAudioJson___id',
  ChildrenClientsJsonLogoChildAudioJsonSource = 'childrenClientsJson___logo___childAudioJson___source',
  ChildrenClientsJsonLogoChildAudioJsonTitle = 'childrenClientsJson___logo___childAudioJson___title',
  ChildrenClientsJsonLogoChildAudioJsonUrl = 'childrenClientsJson___logo___childAudioJson___url',
  ChildrenClientsJsonLogoChildClientsJsonChildren = 'childrenClientsJson___logo___childClientsJson___children',
  ChildrenClientsJsonLogoChildClientsJsonId = 'childrenClientsJson___logo___childClientsJson___id',
  ChildrenClientsJsonLogoChildClientsJsonName = 'childrenClientsJson___logo___childClientsJson___name',
  ChildrenClientsJsonLogoChildClientsJsonUrl = 'childrenClientsJson___logo___childClientsJson___url',
  ChildrenClientsJsonLogoChildContentJsonChildren = 'childrenClientsJson___logo___childContentJson___children',
  ChildrenClientsJsonLogoChildContentJsonDepartmentalAndUniversityService = 'childrenClientsJson___logo___childContentJson___departmentalAndUniversityService',
  ChildrenClientsJsonLogoChildContentJsonEducation = 'childrenClientsJson___logo___childContentJson___education',
  ChildrenClientsJsonLogoChildContentJsonGrantsAndFellowships = 'childrenClientsJson___logo___childContentJson___grantsAndFellowships',
  ChildrenClientsJsonLogoChildContentJsonId = 'childrenClientsJson___logo___childContentJson___id',
  ChildrenClientsJsonLogoChildContentJsonInvitedTalks = 'childrenClientsJson___logo___childContentJson___invitedTalks',
  ChildrenClientsJsonLogoChildContentJsonProfessionalAppointments = 'childrenClientsJson___logo___childContentJson___professionalAppointments',
  ChildrenClientsJsonLogoChildContentJsonProfessionalMemberships = 'childrenClientsJson___logo___childContentJson___professionalMemberships',
  ChildrenClientsJsonLogoChildContentJsonReferences = 'childrenClientsJson___logo___childContentJson___references',
  ChildrenClientsJsonLogoChildContentJsonReviewingExperience = 'childrenClientsJson___logo___childContentJson___reviewingExperience',
  ChildrenClientsJsonLogoChildContentJsonSelectedPressAndMedia = 'childrenClientsJson___logo___childContentJson___selectedPressAndMedia',
  ChildrenClientsJsonLogoChildContentJsonServiceToProfession = 'childrenClientsJson___logo___childContentJson___serviceToProfession',
  ChildrenClientsJsonLogoChildContentJsonTeachingAndSupervisionExperience = 'childrenClientsJson___logo___childContentJson___teachingAndSupervisionExperience',
  ChildrenClientsJsonLogoChildImageSharpChildren = 'childrenClientsJson___logo___childImageSharp___children',
  ChildrenClientsJsonLogoChildImageSharpGatsbyImageData = 'childrenClientsJson___logo___childImageSharp___gatsbyImageData',
  ChildrenClientsJsonLogoChildImageSharpId = 'childrenClientsJson___logo___childImageSharp___id',
  ChildrenClientsJsonLogoChildMarkdownRemarkChildren = 'childrenClientsJson___logo___childMarkdownRemark___children',
  ChildrenClientsJsonLogoChildMarkdownRemarkExcerpt = 'childrenClientsJson___logo___childMarkdownRemark___excerpt',
  ChildrenClientsJsonLogoChildMarkdownRemarkExcerptAst = 'childrenClientsJson___logo___childMarkdownRemark___excerptAst',
  ChildrenClientsJsonLogoChildMarkdownRemarkFileAbsolutePath = 'childrenClientsJson___logo___childMarkdownRemark___fileAbsolutePath',
  ChildrenClientsJsonLogoChildMarkdownRemarkHeadings = 'childrenClientsJson___logo___childMarkdownRemark___headings',
  ChildrenClientsJsonLogoChildMarkdownRemarkHtml = 'childrenClientsJson___logo___childMarkdownRemark___html',
  ChildrenClientsJsonLogoChildMarkdownRemarkHtmlAst = 'childrenClientsJson___logo___childMarkdownRemark___htmlAst',
  ChildrenClientsJsonLogoChildMarkdownRemarkId = 'childrenClientsJson___logo___childMarkdownRemark___id',
  ChildrenClientsJsonLogoChildMarkdownRemarkRawMarkdownBody = 'childrenClientsJson___logo___childMarkdownRemark___rawMarkdownBody',
  ChildrenClientsJsonLogoChildMarkdownRemarkTableOfContents = 'childrenClientsJson___logo___childMarkdownRemark___tableOfContents',
  ChildrenClientsJsonLogoChildMarkdownRemarkTimeToRead = 'childrenClientsJson___logo___childMarkdownRemark___timeToRead',
  ChildrenClientsJsonLogoChildMdxBody = 'childrenClientsJson___logo___childMdx___body',
  ChildrenClientsJsonLogoChildMdxChildren = 'childrenClientsJson___logo___childMdx___children',
  ChildrenClientsJsonLogoChildMdxExcerpt = 'childrenClientsJson___logo___childMdx___excerpt',
  ChildrenClientsJsonLogoChildMdxFileAbsolutePath = 'childrenClientsJson___logo___childMdx___fileAbsolutePath',
  ChildrenClientsJsonLogoChildMdxHeadings = 'childrenClientsJson___logo___childMdx___headings',
  ChildrenClientsJsonLogoChildMdxHtml = 'childrenClientsJson___logo___childMdx___html',
  ChildrenClientsJsonLogoChildMdxId = 'childrenClientsJson___logo___childMdx___id',
  ChildrenClientsJsonLogoChildMdxMdxAst = 'childrenClientsJson___logo___childMdx___mdxAST',
  ChildrenClientsJsonLogoChildMdxRawBody = 'childrenClientsJson___logo___childMdx___rawBody',
  ChildrenClientsJsonLogoChildMdxSlug = 'childrenClientsJson___logo___childMdx___slug',
  ChildrenClientsJsonLogoChildMdxTableOfContents = 'childrenClientsJson___logo___childMdx___tableOfContents',
  ChildrenClientsJsonLogoChildMdxTimeToRead = 'childrenClientsJson___logo___childMdx___timeToRead',
  ChildrenClientsJsonLogoChildMediaJsonChildren = 'childrenClientsJson___logo___childMediaJson___children',
  ChildrenClientsJsonLogoChildMediaJsonId = 'childrenClientsJson___logo___childMediaJson___id',
  ChildrenClientsJsonLogoChildMediaJsonName = 'childrenClientsJson___logo___childMediaJson___name',
  ChildrenClientsJsonLogoChildMediaJsonUrl = 'childrenClientsJson___logo___childMediaJson___url',
  ChildrenClientsJsonLogoChildPrintJsonChildren = 'childrenClientsJson___logo___childPrintJson___children',
  ChildrenClientsJsonLogoChildPrintJsonId = 'childrenClientsJson___logo___childPrintJson___id',
  ChildrenClientsJsonLogoChildPrintJsonSource = 'childrenClientsJson___logo___childPrintJson___source',
  ChildrenClientsJsonLogoChildPrintJsonThumbnail = 'childrenClientsJson___logo___childPrintJson___thumbnail',
  ChildrenClientsJsonLogoChildPrintJsonTitle = 'childrenClientsJson___logo___childPrintJson___title',
  ChildrenClientsJsonLogoChildPrintJsonUrl = 'childrenClientsJson___logo___childPrintJson___url',
  ChildrenClientsJsonLogoChildVideoJsonChildren = 'childrenClientsJson___logo___childVideoJson___children',
  ChildrenClientsJsonLogoChildVideoJsonId = 'childrenClientsJson___logo___childVideoJson___id',
  ChildrenClientsJsonLogoChildVideoJsonSource = 'childrenClientsJson___logo___childVideoJson___source',
  ChildrenClientsJsonLogoChildVideoJsonTitle = 'childrenClientsJson___logo___childVideoJson___title',
  ChildrenClientsJsonLogoChildVideoJsonUrl = 'childrenClientsJson___logo___childVideoJson___url',
  ChildrenClientsJsonLogoChildren = 'childrenClientsJson___logo___children',
  ChildrenClientsJsonLogoChildrenAudioJson = 'childrenClientsJson___logo___childrenAudioJson',
  ChildrenClientsJsonLogoChildrenAudioJsonChildren = 'childrenClientsJson___logo___childrenAudioJson___children',
  ChildrenClientsJsonLogoChildrenAudioJsonId = 'childrenClientsJson___logo___childrenAudioJson___id',
  ChildrenClientsJsonLogoChildrenAudioJsonSource = 'childrenClientsJson___logo___childrenAudioJson___source',
  ChildrenClientsJsonLogoChildrenAudioJsonTitle = 'childrenClientsJson___logo___childrenAudioJson___title',
  ChildrenClientsJsonLogoChildrenAudioJsonUrl = 'childrenClientsJson___logo___childrenAudioJson___url',
  ChildrenClientsJsonLogoChildrenClientsJson = 'childrenClientsJson___logo___childrenClientsJson',
  ChildrenClientsJsonLogoChildrenClientsJsonChildren = 'childrenClientsJson___logo___childrenClientsJson___children',
  ChildrenClientsJsonLogoChildrenClientsJsonId = 'childrenClientsJson___logo___childrenClientsJson___id',
  ChildrenClientsJsonLogoChildrenClientsJsonName = 'childrenClientsJson___logo___childrenClientsJson___name',
  ChildrenClientsJsonLogoChildrenClientsJsonUrl = 'childrenClientsJson___logo___childrenClientsJson___url',
  ChildrenClientsJsonLogoChildrenContentJson = 'childrenClientsJson___logo___childrenContentJson',
  ChildrenClientsJsonLogoChildrenContentJsonChildren = 'childrenClientsJson___logo___childrenContentJson___children',
  ChildrenClientsJsonLogoChildrenContentJsonDepartmentalAndUniversityService = 'childrenClientsJson___logo___childrenContentJson___departmentalAndUniversityService',
  ChildrenClientsJsonLogoChildrenContentJsonEducation = 'childrenClientsJson___logo___childrenContentJson___education',
  ChildrenClientsJsonLogoChildrenContentJsonGrantsAndFellowships = 'childrenClientsJson___logo___childrenContentJson___grantsAndFellowships',
  ChildrenClientsJsonLogoChildrenContentJsonId = 'childrenClientsJson___logo___childrenContentJson___id',
  ChildrenClientsJsonLogoChildrenContentJsonInvitedTalks = 'childrenClientsJson___logo___childrenContentJson___invitedTalks',
  ChildrenClientsJsonLogoChildrenContentJsonProfessionalAppointments = 'childrenClientsJson___logo___childrenContentJson___professionalAppointments',
  ChildrenClientsJsonLogoChildrenContentJsonProfessionalMemberships = 'childrenClientsJson___logo___childrenContentJson___professionalMemberships',
  ChildrenClientsJsonLogoChildrenContentJsonReferences = 'childrenClientsJson___logo___childrenContentJson___references',
  ChildrenClientsJsonLogoChildrenContentJsonReviewingExperience = 'childrenClientsJson___logo___childrenContentJson___reviewingExperience',
  ChildrenClientsJsonLogoChildrenContentJsonSelectedPressAndMedia = 'childrenClientsJson___logo___childrenContentJson___selectedPressAndMedia',
  ChildrenClientsJsonLogoChildrenContentJsonServiceToProfession = 'childrenClientsJson___logo___childrenContentJson___serviceToProfession',
  ChildrenClientsJsonLogoChildrenContentJsonTeachingAndSupervisionExperience = 'childrenClientsJson___logo___childrenContentJson___teachingAndSupervisionExperience',
  ChildrenClientsJsonLogoChildrenImageSharp = 'childrenClientsJson___logo___childrenImageSharp',
  ChildrenClientsJsonLogoChildrenImageSharpChildren = 'childrenClientsJson___logo___childrenImageSharp___children',
  ChildrenClientsJsonLogoChildrenImageSharpGatsbyImageData = 'childrenClientsJson___logo___childrenImageSharp___gatsbyImageData',
  ChildrenClientsJsonLogoChildrenImageSharpId = 'childrenClientsJson___logo___childrenImageSharp___id',
  ChildrenClientsJsonLogoChildrenMarkdownRemark = 'childrenClientsJson___logo___childrenMarkdownRemark',
  ChildrenClientsJsonLogoChildrenMarkdownRemarkChildren = 'childrenClientsJson___logo___childrenMarkdownRemark___children',
  ChildrenClientsJsonLogoChildrenMarkdownRemarkExcerpt = 'childrenClientsJson___logo___childrenMarkdownRemark___excerpt',
  ChildrenClientsJsonLogoChildrenMarkdownRemarkExcerptAst = 'childrenClientsJson___logo___childrenMarkdownRemark___excerptAst',
  ChildrenClientsJsonLogoChildrenMarkdownRemarkFileAbsolutePath = 'childrenClientsJson___logo___childrenMarkdownRemark___fileAbsolutePath',
  ChildrenClientsJsonLogoChildrenMarkdownRemarkHeadings = 'childrenClientsJson___logo___childrenMarkdownRemark___headings',
  ChildrenClientsJsonLogoChildrenMarkdownRemarkHtml = 'childrenClientsJson___logo___childrenMarkdownRemark___html',
  ChildrenClientsJsonLogoChildrenMarkdownRemarkHtmlAst = 'childrenClientsJson___logo___childrenMarkdownRemark___htmlAst',
  ChildrenClientsJsonLogoChildrenMarkdownRemarkId = 'childrenClientsJson___logo___childrenMarkdownRemark___id',
  ChildrenClientsJsonLogoChildrenMarkdownRemarkRawMarkdownBody = 'childrenClientsJson___logo___childrenMarkdownRemark___rawMarkdownBody',
  ChildrenClientsJsonLogoChildrenMarkdownRemarkTableOfContents = 'childrenClientsJson___logo___childrenMarkdownRemark___tableOfContents',
  ChildrenClientsJsonLogoChildrenMarkdownRemarkTimeToRead = 'childrenClientsJson___logo___childrenMarkdownRemark___timeToRead',
  ChildrenClientsJsonLogoChildrenMdx = 'childrenClientsJson___logo___childrenMdx',
  ChildrenClientsJsonLogoChildrenMdxBody = 'childrenClientsJson___logo___childrenMdx___body',
  ChildrenClientsJsonLogoChildrenMdxChildren = 'childrenClientsJson___logo___childrenMdx___children',
  ChildrenClientsJsonLogoChildrenMdxExcerpt = 'childrenClientsJson___logo___childrenMdx___excerpt',
  ChildrenClientsJsonLogoChildrenMdxFileAbsolutePath = 'childrenClientsJson___logo___childrenMdx___fileAbsolutePath',
  ChildrenClientsJsonLogoChildrenMdxHeadings = 'childrenClientsJson___logo___childrenMdx___headings',
  ChildrenClientsJsonLogoChildrenMdxHtml = 'childrenClientsJson___logo___childrenMdx___html',
  ChildrenClientsJsonLogoChildrenMdxId = 'childrenClientsJson___logo___childrenMdx___id',
  ChildrenClientsJsonLogoChildrenMdxMdxAst = 'childrenClientsJson___logo___childrenMdx___mdxAST',
  ChildrenClientsJsonLogoChildrenMdxRawBody = 'childrenClientsJson___logo___childrenMdx___rawBody',
  ChildrenClientsJsonLogoChildrenMdxSlug = 'childrenClientsJson___logo___childrenMdx___slug',
  ChildrenClientsJsonLogoChildrenMdxTableOfContents = 'childrenClientsJson___logo___childrenMdx___tableOfContents',
  ChildrenClientsJsonLogoChildrenMdxTimeToRead = 'childrenClientsJson___logo___childrenMdx___timeToRead',
  ChildrenClientsJsonLogoChildrenMediaJson = 'childrenClientsJson___logo___childrenMediaJson',
  ChildrenClientsJsonLogoChildrenMediaJsonChildren = 'childrenClientsJson___logo___childrenMediaJson___children',
  ChildrenClientsJsonLogoChildrenMediaJsonId = 'childrenClientsJson___logo___childrenMediaJson___id',
  ChildrenClientsJsonLogoChildrenMediaJsonName = 'childrenClientsJson___logo___childrenMediaJson___name',
  ChildrenClientsJsonLogoChildrenMediaJsonUrl = 'childrenClientsJson___logo___childrenMediaJson___url',
  ChildrenClientsJsonLogoChildrenPrintJson = 'childrenClientsJson___logo___childrenPrintJson',
  ChildrenClientsJsonLogoChildrenPrintJsonChildren = 'childrenClientsJson___logo___childrenPrintJson___children',
  ChildrenClientsJsonLogoChildrenPrintJsonId = 'childrenClientsJson___logo___childrenPrintJson___id',
  ChildrenClientsJsonLogoChildrenPrintJsonSource = 'childrenClientsJson___logo___childrenPrintJson___source',
  ChildrenClientsJsonLogoChildrenPrintJsonThumbnail = 'childrenClientsJson___logo___childrenPrintJson___thumbnail',
  ChildrenClientsJsonLogoChildrenPrintJsonTitle = 'childrenClientsJson___logo___childrenPrintJson___title',
  ChildrenClientsJsonLogoChildrenPrintJsonUrl = 'childrenClientsJson___logo___childrenPrintJson___url',
  ChildrenClientsJsonLogoChildrenVideoJson = 'childrenClientsJson___logo___childrenVideoJson',
  ChildrenClientsJsonLogoChildrenVideoJsonChildren = 'childrenClientsJson___logo___childrenVideoJson___children',
  ChildrenClientsJsonLogoChildrenVideoJsonId = 'childrenClientsJson___logo___childrenVideoJson___id',
  ChildrenClientsJsonLogoChildrenVideoJsonSource = 'childrenClientsJson___logo___childrenVideoJson___source',
  ChildrenClientsJsonLogoChildrenVideoJsonTitle = 'childrenClientsJson___logo___childrenVideoJson___title',
  ChildrenClientsJsonLogoChildrenVideoJsonUrl = 'childrenClientsJson___logo___childrenVideoJson___url',
  ChildrenClientsJsonLogoChildrenChildren = 'childrenClientsJson___logo___children___children',
  ChildrenClientsJsonLogoChildrenId = 'childrenClientsJson___logo___children___id',
  ChildrenClientsJsonLogoCtime = 'childrenClientsJson___logo___ctime',
  ChildrenClientsJsonLogoCtimeMs = 'childrenClientsJson___logo___ctimeMs',
  ChildrenClientsJsonLogoDev = 'childrenClientsJson___logo___dev',
  ChildrenClientsJsonLogoDir = 'childrenClientsJson___logo___dir',
  ChildrenClientsJsonLogoExt = 'childrenClientsJson___logo___ext',
  ChildrenClientsJsonLogoExtension = 'childrenClientsJson___logo___extension',
  ChildrenClientsJsonLogoGid = 'childrenClientsJson___logo___gid',
  ChildrenClientsJsonLogoId = 'childrenClientsJson___logo___id',
  ChildrenClientsJsonLogoIno = 'childrenClientsJson___logo___ino',
  ChildrenClientsJsonLogoInternalContent = 'childrenClientsJson___logo___internal___content',
  ChildrenClientsJsonLogoInternalContentDigest = 'childrenClientsJson___logo___internal___contentDigest',
  ChildrenClientsJsonLogoInternalDescription = 'childrenClientsJson___logo___internal___description',
  ChildrenClientsJsonLogoInternalFieldOwners = 'childrenClientsJson___logo___internal___fieldOwners',
  ChildrenClientsJsonLogoInternalIgnoreType = 'childrenClientsJson___logo___internal___ignoreType',
  ChildrenClientsJsonLogoInternalMediaType = 'childrenClientsJson___logo___internal___mediaType',
  ChildrenClientsJsonLogoInternalOwner = 'childrenClientsJson___logo___internal___owner',
  ChildrenClientsJsonLogoInternalType = 'childrenClientsJson___logo___internal___type',
  ChildrenClientsJsonLogoMode = 'childrenClientsJson___logo___mode',
  ChildrenClientsJsonLogoModifiedTime = 'childrenClientsJson___logo___modifiedTime',
  ChildrenClientsJsonLogoMtime = 'childrenClientsJson___logo___mtime',
  ChildrenClientsJsonLogoMtimeMs = 'childrenClientsJson___logo___mtimeMs',
  ChildrenClientsJsonLogoName = 'childrenClientsJson___logo___name',
  ChildrenClientsJsonLogoNlink = 'childrenClientsJson___logo___nlink',
  ChildrenClientsJsonLogoParentChildren = 'childrenClientsJson___logo___parent___children',
  ChildrenClientsJsonLogoParentId = 'childrenClientsJson___logo___parent___id',
  ChildrenClientsJsonLogoPrettySize = 'childrenClientsJson___logo___prettySize',
  ChildrenClientsJsonLogoPublicUrl = 'childrenClientsJson___logo___publicURL',
  ChildrenClientsJsonLogoRdev = 'childrenClientsJson___logo___rdev',
  ChildrenClientsJsonLogoRelativeDirectory = 'childrenClientsJson___logo___relativeDirectory',
  ChildrenClientsJsonLogoRelativePath = 'childrenClientsJson___logo___relativePath',
  ChildrenClientsJsonLogoRoot = 'childrenClientsJson___logo___root',
  ChildrenClientsJsonLogoSize = 'childrenClientsJson___logo___size',
  ChildrenClientsJsonLogoSourceInstanceName = 'childrenClientsJson___logo___sourceInstanceName',
  ChildrenClientsJsonLogoUid = 'childrenClientsJson___logo___uid',
  ChildrenClientsJsonName = 'childrenClientsJson___name',
  ChildrenClientsJsonParentChildren = 'childrenClientsJson___parent___children',
  ChildrenClientsJsonParentChildrenChildren = 'childrenClientsJson___parent___children___children',
  ChildrenClientsJsonParentChildrenId = 'childrenClientsJson___parent___children___id',
  ChildrenClientsJsonParentId = 'childrenClientsJson___parent___id',
  ChildrenClientsJsonParentInternalContent = 'childrenClientsJson___parent___internal___content',
  ChildrenClientsJsonParentInternalContentDigest = 'childrenClientsJson___parent___internal___contentDigest',
  ChildrenClientsJsonParentInternalDescription = 'childrenClientsJson___parent___internal___description',
  ChildrenClientsJsonParentInternalFieldOwners = 'childrenClientsJson___parent___internal___fieldOwners',
  ChildrenClientsJsonParentInternalIgnoreType = 'childrenClientsJson___parent___internal___ignoreType',
  ChildrenClientsJsonParentInternalMediaType = 'childrenClientsJson___parent___internal___mediaType',
  ChildrenClientsJsonParentInternalOwner = 'childrenClientsJson___parent___internal___owner',
  ChildrenClientsJsonParentInternalType = 'childrenClientsJson___parent___internal___type',
  ChildrenClientsJsonParentParentChildren = 'childrenClientsJson___parent___parent___children',
  ChildrenClientsJsonParentParentId = 'childrenClientsJson___parent___parent___id',
  ChildrenClientsJsonUrl = 'childrenClientsJson___url',
  ChildrenContentJson = 'childrenContentJson',
  ChildrenContentJsonChildren = 'childrenContentJson___children',
  ChildrenContentJsonChildrenChildren = 'childrenContentJson___children___children',
  ChildrenContentJsonChildrenChildrenChildren = 'childrenContentJson___children___children___children',
  ChildrenContentJsonChildrenChildrenId = 'childrenContentJson___children___children___id',
  ChildrenContentJsonChildrenId = 'childrenContentJson___children___id',
  ChildrenContentJsonChildrenInternalContent = 'childrenContentJson___children___internal___content',
  ChildrenContentJsonChildrenInternalContentDigest = 'childrenContentJson___children___internal___contentDigest',
  ChildrenContentJsonChildrenInternalDescription = 'childrenContentJson___children___internal___description',
  ChildrenContentJsonChildrenInternalFieldOwners = 'childrenContentJson___children___internal___fieldOwners',
  ChildrenContentJsonChildrenInternalIgnoreType = 'childrenContentJson___children___internal___ignoreType',
  ChildrenContentJsonChildrenInternalMediaType = 'childrenContentJson___children___internal___mediaType',
  ChildrenContentJsonChildrenInternalOwner = 'childrenContentJson___children___internal___owner',
  ChildrenContentJsonChildrenInternalType = 'childrenContentJson___children___internal___type',
  ChildrenContentJsonChildrenParentChildren = 'childrenContentJson___children___parent___children',
  ChildrenContentJsonChildrenParentId = 'childrenContentJson___children___parent___id',
  ChildrenContentJsonConferenceParticipationConferencesOrganized = 'childrenContentJson___conferenceParticipation___conferencesOrganized',
  ChildrenContentJsonConferenceParticipationConferencesOrganizedDate = 'childrenContentJson___conferenceParticipation___conferencesOrganized___date',
  ChildrenContentJsonConferenceParticipationConferencesOrganizedLocation = 'childrenContentJson___conferenceParticipation___conferencesOrganized___location',
  ChildrenContentJsonConferenceParticipationConferencesOrganizedTitle = 'childrenContentJson___conferenceParticipation___conferencesOrganized___title',
  ChildrenContentJsonConferenceParticipationPanelsOrganized = 'childrenContentJson___conferenceParticipation___panelsOrganized',
  ChildrenContentJsonConferenceParticipationPanelsOrganizedAuthors = 'childrenContentJson___conferenceParticipation___panelsOrganized___authors',
  ChildrenContentJsonConferenceParticipationPanelsOrganizedDate = 'childrenContentJson___conferenceParticipation___panelsOrganized___date',
  ChildrenContentJsonConferenceParticipationPanelsOrganizedExtra = 'childrenContentJson___conferenceParticipation___panelsOrganized___extra',
  ChildrenContentJsonConferenceParticipationPanelsOrganizedLocation = 'childrenContentJson___conferenceParticipation___panelsOrganized___location',
  ChildrenContentJsonConferenceParticipationPanelsOrganizedLocatoin = 'childrenContentJson___conferenceParticipation___panelsOrganized___locatoin',
  ChildrenContentJsonConferenceParticipationPanelsOrganizedTitle = 'childrenContentJson___conferenceParticipation___panelsOrganized___title',
  ChildrenContentJsonConferenceParticipationPanelsOrganizedUrl = 'childrenContentJson___conferenceParticipation___panelsOrganized___url',
  ChildrenContentJsonConferenceParticipationPapersPresented = 'childrenContentJson___conferenceParticipation___papersPresented',
  ChildrenContentJsonConferenceParticipationPapersPresentedAuthors = 'childrenContentJson___conferenceParticipation___papersPresented___authors',
  ChildrenContentJsonConferenceParticipationPapersPresentedDate = 'childrenContentJson___conferenceParticipation___papersPresented___date',
  ChildrenContentJsonConferenceParticipationPapersPresentedExtra = 'childrenContentJson___conferenceParticipation___papersPresented___extra',
  ChildrenContentJsonConferenceParticipationPapersPresentedTitle = 'childrenContentJson___conferenceParticipation___papersPresented___title',
  ChildrenContentJsonDepartmentalAndUniversityService = 'childrenContentJson___departmentalAndUniversityService',
  ChildrenContentJsonDepartmentalAndUniversityServiceDate = 'childrenContentJson___departmentalAndUniversityService___date',
  ChildrenContentJsonDepartmentalAndUniversityServiceTitle = 'childrenContentJson___departmentalAndUniversityService___title',
  ChildrenContentJsonEducation = 'childrenContentJson___education',
  ChildrenContentJsonEducationDegree = 'childrenContentJson___education___degree',
  ChildrenContentJsonEducationSource = 'childrenContentJson___education___source',
  ChildrenContentJsonEducationUrl = 'childrenContentJson___education___url',
  ChildrenContentJsonEducationYear = 'childrenContentJson___education___year',
  ChildrenContentJsonFieldsCollection = 'childrenContentJson___fields___collection',
  ChildrenContentJsonGrantsAndFellowships = 'childrenContentJson___grantsAndFellowships',
  ChildrenContentJsonGrantsAndFellowshipsDate = 'childrenContentJson___grantsAndFellowships___date',
  ChildrenContentJsonGrantsAndFellowshipsTitle = 'childrenContentJson___grantsAndFellowships___title',
  ChildrenContentJsonId = 'childrenContentJson___id',
  ChildrenContentJsonInternalContent = 'childrenContentJson___internal___content',
  ChildrenContentJsonInternalContentDigest = 'childrenContentJson___internal___contentDigest',
  ChildrenContentJsonInternalDescription = 'childrenContentJson___internal___description',
  ChildrenContentJsonInternalFieldOwners = 'childrenContentJson___internal___fieldOwners',
  ChildrenContentJsonInternalIgnoreType = 'childrenContentJson___internal___ignoreType',
  ChildrenContentJsonInternalMediaType = 'childrenContentJson___internal___mediaType',
  ChildrenContentJsonInternalOwner = 'childrenContentJson___internal___owner',
  ChildrenContentJsonInternalType = 'childrenContentJson___internal___type',
  ChildrenContentJsonInvitedTalks = 'childrenContentJson___invitedTalks',
  ChildrenContentJsonInvitedTalksAuthors = 'childrenContentJson___invitedTalks___authors',
  ChildrenContentJsonInvitedTalksDate = 'childrenContentJson___invitedTalks___date',
  ChildrenContentJsonInvitedTalksExtra = 'childrenContentJson___invitedTalks___extra',
  ChildrenContentJsonInvitedTalksLocation = 'childrenContentJson___invitedTalks___location',
  ChildrenContentJsonInvitedTalksTitle = 'childrenContentJson___invitedTalks___title',
  ChildrenContentJsonInvitedTalksUrl = 'childrenContentJson___invitedTalks___url',
  ChildrenContentJsonParentChildren = 'childrenContentJson___parent___children',
  ChildrenContentJsonParentChildrenChildren = 'childrenContentJson___parent___children___children',
  ChildrenContentJsonParentChildrenId = 'childrenContentJson___parent___children___id',
  ChildrenContentJsonParentId = 'childrenContentJson___parent___id',
  ChildrenContentJsonParentInternalContent = 'childrenContentJson___parent___internal___content',
  ChildrenContentJsonParentInternalContentDigest = 'childrenContentJson___parent___internal___contentDigest',
  ChildrenContentJsonParentInternalDescription = 'childrenContentJson___parent___internal___description',
  ChildrenContentJsonParentInternalFieldOwners = 'childrenContentJson___parent___internal___fieldOwners',
  ChildrenContentJsonParentInternalIgnoreType = 'childrenContentJson___parent___internal___ignoreType',
  ChildrenContentJsonParentInternalMediaType = 'childrenContentJson___parent___internal___mediaType',
  ChildrenContentJsonParentInternalOwner = 'childrenContentJson___parent___internal___owner',
  ChildrenContentJsonParentInternalType = 'childrenContentJson___parent___internal___type',
  ChildrenContentJsonParentParentChildren = 'childrenContentJson___parent___parent___children',
  ChildrenContentJsonParentParentId = 'childrenContentJson___parent___parent___id',
  ChildrenContentJsonProfessionalAppointments = 'childrenContentJson___professionalAppointments',
  ChildrenContentJsonProfessionalAppointmentsDate = 'childrenContentJson___professionalAppointments___date',
  ChildrenContentJsonProfessionalAppointmentsOrganizationTitle = 'childrenContentJson___professionalAppointments___organization___title',
  ChildrenContentJsonProfessionalAppointmentsOrganizationUrl = 'childrenContentJson___professionalAppointments___organization___url',
  ChildrenContentJsonProfessionalAppointmentsTitle = 'childrenContentJson___professionalAppointments___title',
  ChildrenContentJsonProfessionalMemberships = 'childrenContentJson___professionalMemberships',
  ChildrenContentJsonProfessionalMembershipsDate = 'childrenContentJson___professionalMemberships___date',
  ChildrenContentJsonProfessionalMembershipsTitle = 'childrenContentJson___professionalMemberships___title',
  ChildrenContentJsonProfessionalMembershipsUrl = 'childrenContentJson___professionalMemberships___url',
  ChildrenContentJsonPublicationsBookChapters = 'childrenContentJson___publications___bookChapters',
  ChildrenContentJsonPublicationsBookChaptersAuthors = 'childrenContentJson___publications___bookChapters___authors',
  ChildrenContentJsonPublicationsBookChaptersDate = 'childrenContentJson___publications___bookChapters___date',
  ChildrenContentJsonPublicationsBookChaptersPages = 'childrenContentJson___publications___bookChapters___pages',
  ChildrenContentJsonPublicationsBookChaptersTitle = 'childrenContentJson___publications___bookChapters___title',
  ChildrenContentJsonPublicationsBooks = 'childrenContentJson___publications___books',
  ChildrenContentJsonPublicationsBooksAuthors = 'childrenContentJson___publications___books___authors',
  ChildrenContentJsonPublicationsBooksDate = 'childrenContentJson___publications___books___date',
  ChildrenContentJsonPublicationsBooksTitle = 'childrenContentJson___publications___books___title',
  ChildrenContentJsonPublicationsBooksUrl = 'childrenContentJson___publications___books___url',
  ChildrenContentJsonPublicationsConferenceProceedings = 'childrenContentJson___publications___conferenceProceedings',
  ChildrenContentJsonPublicationsConferenceProceedingsAuthors = 'childrenContentJson___publications___conferenceProceedings___authors',
  ChildrenContentJsonPublicationsConferenceProceedingsDate = 'childrenContentJson___publications___conferenceProceedings___date',
  ChildrenContentJsonPublicationsConferenceProceedingsTitle = 'childrenContentJson___publications___conferenceProceedings___title',
  ChildrenContentJsonPublicationsConferenceProceedingsUrl = 'childrenContentJson___publications___conferenceProceedings___url',
  ChildrenContentJsonPublicationsEditedVolumes = 'childrenContentJson___publications___editedVolumes',
  ChildrenContentJsonPublicationsEditedVolumesAuthors = 'childrenContentJson___publications___editedVolumes___authors',
  ChildrenContentJsonPublicationsEditedVolumesDate = 'childrenContentJson___publications___editedVolumes___date',
  ChildrenContentJsonPublicationsEditedVolumesTitle = 'childrenContentJson___publications___editedVolumes___title',
  ChildrenContentJsonPublicationsEditedVolumesUrl = 'childrenContentJson___publications___editedVolumes___url',
  ChildrenContentJsonPublicationsOtherPublications = 'childrenContentJson___publications___otherPublications',
  ChildrenContentJsonPublicationsOtherPublicationsAuthors = 'childrenContentJson___publications___otherPublications___authors',
  ChildrenContentJsonPublicationsOtherPublicationsDate = 'childrenContentJson___publications___otherPublications___date',
  ChildrenContentJsonPublicationsOtherPublicationsTitle = 'childrenContentJson___publications___otherPublications___title',
  ChildrenContentJsonPublicationsOtherPublicationsUrl = 'childrenContentJson___publications___otherPublications___url',
  ChildrenContentJsonPublicationsRefereedJournalArticles = 'childrenContentJson___publications___refereedJournalArticles',
  ChildrenContentJsonPublicationsRefereedJournalArticlesAuthors = 'childrenContentJson___publications___refereedJournalArticles___authors',
  ChildrenContentJsonPublicationsRefereedJournalArticlesDate = 'childrenContentJson___publications___refereedJournalArticles___date',
  ChildrenContentJsonPublicationsRefereedJournalArticlesTitle = 'childrenContentJson___publications___refereedJournalArticles___title',
  ChildrenContentJsonPublicationsRefereedJournalArticlesUrl = 'childrenContentJson___publications___refereedJournalArticles___url',
  ChildrenContentJsonReferences = 'childrenContentJson___references',
  ChildrenContentJsonReferencesReference = 'childrenContentJson___references___reference',
  ChildrenContentJsonReviewingExperience = 'childrenContentJson___reviewingExperience',
  ChildrenContentJsonReviewingExperienceDate = 'childrenContentJson___reviewingExperience___date',
  ChildrenContentJsonReviewingExperienceTitle = 'childrenContentJson___reviewingExperience___title',
  ChildrenContentJsonSelectedPressAndMedia = 'childrenContentJson___selectedPressAndMedia',
  ChildrenContentJsonSelectedPressAndMediaAuthors = 'childrenContentJson___selectedPressAndMedia___authors',
  ChildrenContentJsonSelectedPressAndMediaDate = 'childrenContentJson___selectedPressAndMedia___date',
  ChildrenContentJsonSelectedPressAndMediaFormattedSource = 'childrenContentJson___selectedPressAndMedia___formattedSource',
  ChildrenContentJsonSelectedPressAndMediaSource = 'childrenContentJson___selectedPressAndMedia___source',
  ChildrenContentJsonSelectedPressAndMediaTitle = 'childrenContentJson___selectedPressAndMedia___title',
  ChildrenContentJsonSelectedPressAndMediaUrl = 'childrenContentJson___selectedPressAndMedia___url',
  ChildrenContentJsonServiceToProfession = 'childrenContentJson___serviceToProfession',
  ChildrenContentJsonServiceToProfessionDate = 'childrenContentJson___serviceToProfession___date',
  ChildrenContentJsonServiceToProfessionTitle = 'childrenContentJson___serviceToProfession___title',
  ChildrenContentJsonTeachingAndSupervisionExperience = 'childrenContentJson___teachingAndSupervisionExperience',
  ChildrenContentJsonTeachingAndSupervisionExperienceCourses = 'childrenContentJson___teachingAndSupervisionExperience___courses',
  ChildrenContentJsonTeachingAndSupervisionExperienceCoursesDate = 'childrenContentJson___teachingAndSupervisionExperience___courses___date',
  ChildrenContentJsonTeachingAndSupervisionExperienceCoursesTitle = 'childrenContentJson___teachingAndSupervisionExperience___courses___title',
  ChildrenContentJsonTeachingAndSupervisionExperienceLocation = 'childrenContentJson___teachingAndSupervisionExperience___location',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpFieldsCollection = 'childrenImageSharp___fields___collection',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkFieldsCollection = 'childrenMarkdownRemark___fields___collection',
  ChildrenMarkdownRemarkFieldsPath = 'childrenMarkdownRemark___fields___path',
  ChildrenMarkdownRemarkFieldsSlug = 'childrenMarkdownRemark___fields___slug',
  ChildrenMarkdownRemarkFieldsTags = 'childrenMarkdownRemark___fields___tags',
  ChildrenMarkdownRemarkFileAbsolutePath = 'childrenMarkdownRemark___fileAbsolutePath',
  ChildrenMarkdownRemarkFrontmatterCategory = 'childrenMarkdownRemark___frontmatter___category',
  ChildrenMarkdownRemarkFrontmatterCoverAbsolutePath = 'childrenMarkdownRemark___frontmatter___cover___absolutePath',
  ChildrenMarkdownRemarkFrontmatterCoverAccessTime = 'childrenMarkdownRemark___frontmatter___cover___accessTime',
  ChildrenMarkdownRemarkFrontmatterCoverAtime = 'childrenMarkdownRemark___frontmatter___cover___atime',
  ChildrenMarkdownRemarkFrontmatterCoverAtimeMs = 'childrenMarkdownRemark___frontmatter___cover___atimeMs',
  ChildrenMarkdownRemarkFrontmatterCoverBase = 'childrenMarkdownRemark___frontmatter___cover___base',
  ChildrenMarkdownRemarkFrontmatterCoverBirthTime = 'childrenMarkdownRemark___frontmatter___cover___birthTime',
  ChildrenMarkdownRemarkFrontmatterCoverBirthtime = 'childrenMarkdownRemark___frontmatter___cover___birthtime',
  ChildrenMarkdownRemarkFrontmatterCoverBirthtimeMs = 'childrenMarkdownRemark___frontmatter___cover___birthtimeMs',
  ChildrenMarkdownRemarkFrontmatterCoverBlksize = 'childrenMarkdownRemark___frontmatter___cover___blksize',
  ChildrenMarkdownRemarkFrontmatterCoverBlocks = 'childrenMarkdownRemark___frontmatter___cover___blocks',
  ChildrenMarkdownRemarkFrontmatterCoverChangeTime = 'childrenMarkdownRemark___frontmatter___cover___changeTime',
  ChildrenMarkdownRemarkFrontmatterCoverChildren = 'childrenMarkdownRemark___frontmatter___cover___children',
  ChildrenMarkdownRemarkFrontmatterCoverChildrenAudioJson = 'childrenMarkdownRemark___frontmatter___cover___childrenAudioJson',
  ChildrenMarkdownRemarkFrontmatterCoverChildrenClientsJson = 'childrenMarkdownRemark___frontmatter___cover___childrenClientsJson',
  ChildrenMarkdownRemarkFrontmatterCoverChildrenContentJson = 'childrenMarkdownRemark___frontmatter___cover___childrenContentJson',
  ChildrenMarkdownRemarkFrontmatterCoverChildrenImageSharp = 'childrenMarkdownRemark___frontmatter___cover___childrenImageSharp',
  ChildrenMarkdownRemarkFrontmatterCoverChildrenMarkdownRemark = 'childrenMarkdownRemark___frontmatter___cover___childrenMarkdownRemark',
  ChildrenMarkdownRemarkFrontmatterCoverChildrenMdx = 'childrenMarkdownRemark___frontmatter___cover___childrenMdx',
  ChildrenMarkdownRemarkFrontmatterCoverChildrenMediaJson = 'childrenMarkdownRemark___frontmatter___cover___childrenMediaJson',
  ChildrenMarkdownRemarkFrontmatterCoverChildrenPrintJson = 'childrenMarkdownRemark___frontmatter___cover___childrenPrintJson',
  ChildrenMarkdownRemarkFrontmatterCoverChildrenVideoJson = 'childrenMarkdownRemark___frontmatter___cover___childrenVideoJson',
  ChildrenMarkdownRemarkFrontmatterCoverCtime = 'childrenMarkdownRemark___frontmatter___cover___ctime',
  ChildrenMarkdownRemarkFrontmatterCoverCtimeMs = 'childrenMarkdownRemark___frontmatter___cover___ctimeMs',
  ChildrenMarkdownRemarkFrontmatterCoverDev = 'childrenMarkdownRemark___frontmatter___cover___dev',
  ChildrenMarkdownRemarkFrontmatterCoverDir = 'childrenMarkdownRemark___frontmatter___cover___dir',
  ChildrenMarkdownRemarkFrontmatterCoverExt = 'childrenMarkdownRemark___frontmatter___cover___ext',
  ChildrenMarkdownRemarkFrontmatterCoverExtension = 'childrenMarkdownRemark___frontmatter___cover___extension',
  ChildrenMarkdownRemarkFrontmatterCoverGid = 'childrenMarkdownRemark___frontmatter___cover___gid',
  ChildrenMarkdownRemarkFrontmatterCoverId = 'childrenMarkdownRemark___frontmatter___cover___id',
  ChildrenMarkdownRemarkFrontmatterCoverIno = 'childrenMarkdownRemark___frontmatter___cover___ino',
  ChildrenMarkdownRemarkFrontmatterCoverMode = 'childrenMarkdownRemark___frontmatter___cover___mode',
  ChildrenMarkdownRemarkFrontmatterCoverModifiedTime = 'childrenMarkdownRemark___frontmatter___cover___modifiedTime',
  ChildrenMarkdownRemarkFrontmatterCoverMtime = 'childrenMarkdownRemark___frontmatter___cover___mtime',
  ChildrenMarkdownRemarkFrontmatterCoverMtimeMs = 'childrenMarkdownRemark___frontmatter___cover___mtimeMs',
  ChildrenMarkdownRemarkFrontmatterCoverName = 'childrenMarkdownRemark___frontmatter___cover___name',
  ChildrenMarkdownRemarkFrontmatterCoverNlink = 'childrenMarkdownRemark___frontmatter___cover___nlink',
  ChildrenMarkdownRemarkFrontmatterCoverPrettySize = 'childrenMarkdownRemark___frontmatter___cover___prettySize',
  ChildrenMarkdownRemarkFrontmatterCoverPublicUrl = 'childrenMarkdownRemark___frontmatter___cover___publicURL',
  ChildrenMarkdownRemarkFrontmatterCoverRdev = 'childrenMarkdownRemark___frontmatter___cover___rdev',
  ChildrenMarkdownRemarkFrontmatterCoverRelativeDirectory = 'childrenMarkdownRemark___frontmatter___cover___relativeDirectory',
  ChildrenMarkdownRemarkFrontmatterCoverRelativePath = 'childrenMarkdownRemark___frontmatter___cover___relativePath',
  ChildrenMarkdownRemarkFrontmatterCoverRoot = 'childrenMarkdownRemark___frontmatter___cover___root',
  ChildrenMarkdownRemarkFrontmatterCoverSize = 'childrenMarkdownRemark___frontmatter___cover___size',
  ChildrenMarkdownRemarkFrontmatterCoverSourceInstanceName = 'childrenMarkdownRemark___frontmatter___cover___sourceInstanceName',
  ChildrenMarkdownRemarkFrontmatterCoverUid = 'childrenMarkdownRemark___frontmatter___cover___uid',
  ChildrenMarkdownRemarkFrontmatterDate = 'childrenMarkdownRemark___frontmatter___date',
  ChildrenMarkdownRemarkFrontmatterIsbn10 = 'childrenMarkdownRemark___frontmatter___isbn10',
  ChildrenMarkdownRemarkFrontmatterIsbn13 = 'childrenMarkdownRemark___frontmatter___isbn13',
  ChildrenMarkdownRemarkFrontmatterLayout = 'childrenMarkdownRemark___frontmatter___layout',
  ChildrenMarkdownRemarkFrontmatterProductIdAmazon = 'childrenMarkdownRemark___frontmatter___productId___amazon',
  ChildrenMarkdownRemarkFrontmatterProductIdIndiebound = 'childrenMarkdownRemark___frontmatter___productId___indiebound',
  ChildrenMarkdownRemarkFrontmatterReviews = 'childrenMarkdownRemark___frontmatter___reviews',
  ChildrenMarkdownRemarkFrontmatterReviewsAuthor = 'childrenMarkdownRemark___frontmatter___reviews___author',
  ChildrenMarkdownRemarkFrontmatterReviewsAuthorTitle = 'childrenMarkdownRemark___frontmatter___reviews___authorTitle',
  ChildrenMarkdownRemarkFrontmatterReviewsText = 'childrenMarkdownRemark___frontmatter___reviews___text',
  ChildrenMarkdownRemarkFrontmatterSubtitle = 'childrenMarkdownRemark___frontmatter___subtitle',
  ChildrenMarkdownRemarkFrontmatterTags = 'childrenMarkdownRemark___frontmatter___tags',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenMdx = 'childrenMdx',
  ChildrenMdxBody = 'childrenMdx___body',
  ChildrenMdxChildren = 'childrenMdx___children',
  ChildrenMdxChildrenChildren = 'childrenMdx___children___children',
  ChildrenMdxChildrenChildrenChildren = 'childrenMdx___children___children___children',
  ChildrenMdxChildrenChildrenId = 'childrenMdx___children___children___id',
  ChildrenMdxChildrenId = 'childrenMdx___children___id',
  ChildrenMdxChildrenInternalContent = 'childrenMdx___children___internal___content',
  ChildrenMdxChildrenInternalContentDigest = 'childrenMdx___children___internal___contentDigest',
  ChildrenMdxChildrenInternalDescription = 'childrenMdx___children___internal___description',
  ChildrenMdxChildrenInternalFieldOwners = 'childrenMdx___children___internal___fieldOwners',
  ChildrenMdxChildrenInternalIgnoreType = 'childrenMdx___children___internal___ignoreType',
  ChildrenMdxChildrenInternalMediaType = 'childrenMdx___children___internal___mediaType',
  ChildrenMdxChildrenInternalOwner = 'childrenMdx___children___internal___owner',
  ChildrenMdxChildrenInternalType = 'childrenMdx___children___internal___type',
  ChildrenMdxChildrenParentChildren = 'childrenMdx___children___parent___children',
  ChildrenMdxChildrenParentId = 'childrenMdx___children___parent___id',
  ChildrenMdxExcerpt = 'childrenMdx___excerpt',
  ChildrenMdxFieldsCollection = 'childrenMdx___fields___collection',
  ChildrenMdxFieldsSlug = 'childrenMdx___fields___slug',
  ChildrenMdxFileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  ChildrenMdxFrontmatterTitle = 'childrenMdx___frontmatter___title',
  ChildrenMdxHeadings = 'childrenMdx___headings',
  ChildrenMdxHeadingsDepth = 'childrenMdx___headings___depth',
  ChildrenMdxHeadingsValue = 'childrenMdx___headings___value',
  ChildrenMdxHtml = 'childrenMdx___html',
  ChildrenMdxId = 'childrenMdx___id',
  ChildrenMdxInternalContent = 'childrenMdx___internal___content',
  ChildrenMdxInternalContentDigest = 'childrenMdx___internal___contentDigest',
  ChildrenMdxInternalDescription = 'childrenMdx___internal___description',
  ChildrenMdxInternalFieldOwners = 'childrenMdx___internal___fieldOwners',
  ChildrenMdxInternalIgnoreType = 'childrenMdx___internal___ignoreType',
  ChildrenMdxInternalMediaType = 'childrenMdx___internal___mediaType',
  ChildrenMdxInternalOwner = 'childrenMdx___internal___owner',
  ChildrenMdxInternalType = 'childrenMdx___internal___type',
  ChildrenMdxMdxAst = 'childrenMdx___mdxAST',
  ChildrenMdxParentChildren = 'childrenMdx___parent___children',
  ChildrenMdxParentChildrenChildren = 'childrenMdx___parent___children___children',
  ChildrenMdxParentChildrenId = 'childrenMdx___parent___children___id',
  ChildrenMdxParentId = 'childrenMdx___parent___id',
  ChildrenMdxParentInternalContent = 'childrenMdx___parent___internal___content',
  ChildrenMdxParentInternalContentDigest = 'childrenMdx___parent___internal___contentDigest',
  ChildrenMdxParentInternalDescription = 'childrenMdx___parent___internal___description',
  ChildrenMdxParentInternalFieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  ChildrenMdxParentInternalIgnoreType = 'childrenMdx___parent___internal___ignoreType',
  ChildrenMdxParentInternalMediaType = 'childrenMdx___parent___internal___mediaType',
  ChildrenMdxParentInternalOwner = 'childrenMdx___parent___internal___owner',
  ChildrenMdxParentInternalType = 'childrenMdx___parent___internal___type',
  ChildrenMdxParentParentChildren = 'childrenMdx___parent___parent___children',
  ChildrenMdxParentParentId = 'childrenMdx___parent___parent___id',
  ChildrenMdxRawBody = 'childrenMdx___rawBody',
  ChildrenMdxSlug = 'childrenMdx___slug',
  ChildrenMdxTableOfContents = 'childrenMdx___tableOfContents',
  ChildrenMdxTimeToRead = 'childrenMdx___timeToRead',
  ChildrenMdxWordCountParagraphs = 'childrenMdx___wordCount___paragraphs',
  ChildrenMdxWordCountSentences = 'childrenMdx___wordCount___sentences',
  ChildrenMdxWordCountWords = 'childrenMdx___wordCount___words',
  ChildrenMediaJson = 'childrenMediaJson',
  ChildrenMediaJsonChildren = 'childrenMediaJson___children',
  ChildrenMediaJsonChildrenChildren = 'childrenMediaJson___children___children',
  ChildrenMediaJsonChildrenChildrenChildren = 'childrenMediaJson___children___children___children',
  ChildrenMediaJsonChildrenChildrenId = 'childrenMediaJson___children___children___id',
  ChildrenMediaJsonChildrenId = 'childrenMediaJson___children___id',
  ChildrenMediaJsonChildrenInternalContent = 'childrenMediaJson___children___internal___content',
  ChildrenMediaJsonChildrenInternalContentDigest = 'childrenMediaJson___children___internal___contentDigest',
  ChildrenMediaJsonChildrenInternalDescription = 'childrenMediaJson___children___internal___description',
  ChildrenMediaJsonChildrenInternalFieldOwners = 'childrenMediaJson___children___internal___fieldOwners',
  ChildrenMediaJsonChildrenInternalIgnoreType = 'childrenMediaJson___children___internal___ignoreType',
  ChildrenMediaJsonChildrenInternalMediaType = 'childrenMediaJson___children___internal___mediaType',
  ChildrenMediaJsonChildrenInternalOwner = 'childrenMediaJson___children___internal___owner',
  ChildrenMediaJsonChildrenInternalType = 'childrenMediaJson___children___internal___type',
  ChildrenMediaJsonChildrenParentChildren = 'childrenMediaJson___children___parent___children',
  ChildrenMediaJsonChildrenParentId = 'childrenMediaJson___children___parent___id',
  ChildrenMediaJsonFieldsCollection = 'childrenMediaJson___fields___collection',
  ChildrenMediaJsonId = 'childrenMediaJson___id',
  ChildrenMediaJsonInternalContent = 'childrenMediaJson___internal___content',
  ChildrenMediaJsonInternalContentDigest = 'childrenMediaJson___internal___contentDigest',
  ChildrenMediaJsonInternalDescription = 'childrenMediaJson___internal___description',
  ChildrenMediaJsonInternalFieldOwners = 'childrenMediaJson___internal___fieldOwners',
  ChildrenMediaJsonInternalIgnoreType = 'childrenMediaJson___internal___ignoreType',
  ChildrenMediaJsonInternalMediaType = 'childrenMediaJson___internal___mediaType',
  ChildrenMediaJsonInternalOwner = 'childrenMediaJson___internal___owner',
  ChildrenMediaJsonInternalType = 'childrenMediaJson___internal___type',
  ChildrenMediaJsonLogoAbsolutePath = 'childrenMediaJson___logo___absolutePath',
  ChildrenMediaJsonLogoAccessTime = 'childrenMediaJson___logo___accessTime',
  ChildrenMediaJsonLogoAtime = 'childrenMediaJson___logo___atime',
  ChildrenMediaJsonLogoAtimeMs = 'childrenMediaJson___logo___atimeMs',
  ChildrenMediaJsonLogoBase = 'childrenMediaJson___logo___base',
  ChildrenMediaJsonLogoBirthTime = 'childrenMediaJson___logo___birthTime',
  ChildrenMediaJsonLogoBirthtime = 'childrenMediaJson___logo___birthtime',
  ChildrenMediaJsonLogoBirthtimeMs = 'childrenMediaJson___logo___birthtimeMs',
  ChildrenMediaJsonLogoBlksize = 'childrenMediaJson___logo___blksize',
  ChildrenMediaJsonLogoBlocks = 'childrenMediaJson___logo___blocks',
  ChildrenMediaJsonLogoChangeTime = 'childrenMediaJson___logo___changeTime',
  ChildrenMediaJsonLogoChildAudioJsonChildren = 'childrenMediaJson___logo___childAudioJson___children',
  ChildrenMediaJsonLogoChildAudioJsonId = 'childrenMediaJson___logo___childAudioJson___id',
  ChildrenMediaJsonLogoChildAudioJsonSource = 'childrenMediaJson___logo___childAudioJson___source',
  ChildrenMediaJsonLogoChildAudioJsonTitle = 'childrenMediaJson___logo___childAudioJson___title',
  ChildrenMediaJsonLogoChildAudioJsonUrl = 'childrenMediaJson___logo___childAudioJson___url',
  ChildrenMediaJsonLogoChildClientsJsonChildren = 'childrenMediaJson___logo___childClientsJson___children',
  ChildrenMediaJsonLogoChildClientsJsonId = 'childrenMediaJson___logo___childClientsJson___id',
  ChildrenMediaJsonLogoChildClientsJsonName = 'childrenMediaJson___logo___childClientsJson___name',
  ChildrenMediaJsonLogoChildClientsJsonUrl = 'childrenMediaJson___logo___childClientsJson___url',
  ChildrenMediaJsonLogoChildContentJsonChildren = 'childrenMediaJson___logo___childContentJson___children',
  ChildrenMediaJsonLogoChildContentJsonDepartmentalAndUniversityService = 'childrenMediaJson___logo___childContentJson___departmentalAndUniversityService',
  ChildrenMediaJsonLogoChildContentJsonEducation = 'childrenMediaJson___logo___childContentJson___education',
  ChildrenMediaJsonLogoChildContentJsonGrantsAndFellowships = 'childrenMediaJson___logo___childContentJson___grantsAndFellowships',
  ChildrenMediaJsonLogoChildContentJsonId = 'childrenMediaJson___logo___childContentJson___id',
  ChildrenMediaJsonLogoChildContentJsonInvitedTalks = 'childrenMediaJson___logo___childContentJson___invitedTalks',
  ChildrenMediaJsonLogoChildContentJsonProfessionalAppointments = 'childrenMediaJson___logo___childContentJson___professionalAppointments',
  ChildrenMediaJsonLogoChildContentJsonProfessionalMemberships = 'childrenMediaJson___logo___childContentJson___professionalMemberships',
  ChildrenMediaJsonLogoChildContentJsonReferences = 'childrenMediaJson___logo___childContentJson___references',
  ChildrenMediaJsonLogoChildContentJsonReviewingExperience = 'childrenMediaJson___logo___childContentJson___reviewingExperience',
  ChildrenMediaJsonLogoChildContentJsonSelectedPressAndMedia = 'childrenMediaJson___logo___childContentJson___selectedPressAndMedia',
  ChildrenMediaJsonLogoChildContentJsonServiceToProfession = 'childrenMediaJson___logo___childContentJson___serviceToProfession',
  ChildrenMediaJsonLogoChildContentJsonTeachingAndSupervisionExperience = 'childrenMediaJson___logo___childContentJson___teachingAndSupervisionExperience',
  ChildrenMediaJsonLogoChildImageSharpChildren = 'childrenMediaJson___logo___childImageSharp___children',
  ChildrenMediaJsonLogoChildImageSharpGatsbyImageData = 'childrenMediaJson___logo___childImageSharp___gatsbyImageData',
  ChildrenMediaJsonLogoChildImageSharpId = 'childrenMediaJson___logo___childImageSharp___id',
  ChildrenMediaJsonLogoChildMarkdownRemarkChildren = 'childrenMediaJson___logo___childMarkdownRemark___children',
  ChildrenMediaJsonLogoChildMarkdownRemarkExcerpt = 'childrenMediaJson___logo___childMarkdownRemark___excerpt',
  ChildrenMediaJsonLogoChildMarkdownRemarkExcerptAst = 'childrenMediaJson___logo___childMarkdownRemark___excerptAst',
  ChildrenMediaJsonLogoChildMarkdownRemarkFileAbsolutePath = 'childrenMediaJson___logo___childMarkdownRemark___fileAbsolutePath',
  ChildrenMediaJsonLogoChildMarkdownRemarkHeadings = 'childrenMediaJson___logo___childMarkdownRemark___headings',
  ChildrenMediaJsonLogoChildMarkdownRemarkHtml = 'childrenMediaJson___logo___childMarkdownRemark___html',
  ChildrenMediaJsonLogoChildMarkdownRemarkHtmlAst = 'childrenMediaJson___logo___childMarkdownRemark___htmlAst',
  ChildrenMediaJsonLogoChildMarkdownRemarkId = 'childrenMediaJson___logo___childMarkdownRemark___id',
  ChildrenMediaJsonLogoChildMarkdownRemarkRawMarkdownBody = 'childrenMediaJson___logo___childMarkdownRemark___rawMarkdownBody',
  ChildrenMediaJsonLogoChildMarkdownRemarkTableOfContents = 'childrenMediaJson___logo___childMarkdownRemark___tableOfContents',
  ChildrenMediaJsonLogoChildMarkdownRemarkTimeToRead = 'childrenMediaJson___logo___childMarkdownRemark___timeToRead',
  ChildrenMediaJsonLogoChildMdxBody = 'childrenMediaJson___logo___childMdx___body',
  ChildrenMediaJsonLogoChildMdxChildren = 'childrenMediaJson___logo___childMdx___children',
  ChildrenMediaJsonLogoChildMdxExcerpt = 'childrenMediaJson___logo___childMdx___excerpt',
  ChildrenMediaJsonLogoChildMdxFileAbsolutePath = 'childrenMediaJson___logo___childMdx___fileAbsolutePath',
  ChildrenMediaJsonLogoChildMdxHeadings = 'childrenMediaJson___logo___childMdx___headings',
  ChildrenMediaJsonLogoChildMdxHtml = 'childrenMediaJson___logo___childMdx___html',
  ChildrenMediaJsonLogoChildMdxId = 'childrenMediaJson___logo___childMdx___id',
  ChildrenMediaJsonLogoChildMdxMdxAst = 'childrenMediaJson___logo___childMdx___mdxAST',
  ChildrenMediaJsonLogoChildMdxRawBody = 'childrenMediaJson___logo___childMdx___rawBody',
  ChildrenMediaJsonLogoChildMdxSlug = 'childrenMediaJson___logo___childMdx___slug',
  ChildrenMediaJsonLogoChildMdxTableOfContents = 'childrenMediaJson___logo___childMdx___tableOfContents',
  ChildrenMediaJsonLogoChildMdxTimeToRead = 'childrenMediaJson___logo___childMdx___timeToRead',
  ChildrenMediaJsonLogoChildMediaJsonChildren = 'childrenMediaJson___logo___childMediaJson___children',
  ChildrenMediaJsonLogoChildMediaJsonId = 'childrenMediaJson___logo___childMediaJson___id',
  ChildrenMediaJsonLogoChildMediaJsonName = 'childrenMediaJson___logo___childMediaJson___name',
  ChildrenMediaJsonLogoChildMediaJsonUrl = 'childrenMediaJson___logo___childMediaJson___url',
  ChildrenMediaJsonLogoChildPrintJsonChildren = 'childrenMediaJson___logo___childPrintJson___children',
  ChildrenMediaJsonLogoChildPrintJsonId = 'childrenMediaJson___logo___childPrintJson___id',
  ChildrenMediaJsonLogoChildPrintJsonSource = 'childrenMediaJson___logo___childPrintJson___source',
  ChildrenMediaJsonLogoChildPrintJsonThumbnail = 'childrenMediaJson___logo___childPrintJson___thumbnail',
  ChildrenMediaJsonLogoChildPrintJsonTitle = 'childrenMediaJson___logo___childPrintJson___title',
  ChildrenMediaJsonLogoChildPrintJsonUrl = 'childrenMediaJson___logo___childPrintJson___url',
  ChildrenMediaJsonLogoChildVideoJsonChildren = 'childrenMediaJson___logo___childVideoJson___children',
  ChildrenMediaJsonLogoChildVideoJsonId = 'childrenMediaJson___logo___childVideoJson___id',
  ChildrenMediaJsonLogoChildVideoJsonSource = 'childrenMediaJson___logo___childVideoJson___source',
  ChildrenMediaJsonLogoChildVideoJsonTitle = 'childrenMediaJson___logo___childVideoJson___title',
  ChildrenMediaJsonLogoChildVideoJsonUrl = 'childrenMediaJson___logo___childVideoJson___url',
  ChildrenMediaJsonLogoChildren = 'childrenMediaJson___logo___children',
  ChildrenMediaJsonLogoChildrenAudioJson = 'childrenMediaJson___logo___childrenAudioJson',
  ChildrenMediaJsonLogoChildrenAudioJsonChildren = 'childrenMediaJson___logo___childrenAudioJson___children',
  ChildrenMediaJsonLogoChildrenAudioJsonId = 'childrenMediaJson___logo___childrenAudioJson___id',
  ChildrenMediaJsonLogoChildrenAudioJsonSource = 'childrenMediaJson___logo___childrenAudioJson___source',
  ChildrenMediaJsonLogoChildrenAudioJsonTitle = 'childrenMediaJson___logo___childrenAudioJson___title',
  ChildrenMediaJsonLogoChildrenAudioJsonUrl = 'childrenMediaJson___logo___childrenAudioJson___url',
  ChildrenMediaJsonLogoChildrenClientsJson = 'childrenMediaJson___logo___childrenClientsJson',
  ChildrenMediaJsonLogoChildrenClientsJsonChildren = 'childrenMediaJson___logo___childrenClientsJson___children',
  ChildrenMediaJsonLogoChildrenClientsJsonId = 'childrenMediaJson___logo___childrenClientsJson___id',
  ChildrenMediaJsonLogoChildrenClientsJsonName = 'childrenMediaJson___logo___childrenClientsJson___name',
  ChildrenMediaJsonLogoChildrenClientsJsonUrl = 'childrenMediaJson___logo___childrenClientsJson___url',
  ChildrenMediaJsonLogoChildrenContentJson = 'childrenMediaJson___logo___childrenContentJson',
  ChildrenMediaJsonLogoChildrenContentJsonChildren = 'childrenMediaJson___logo___childrenContentJson___children',
  ChildrenMediaJsonLogoChildrenContentJsonDepartmentalAndUniversityService = 'childrenMediaJson___logo___childrenContentJson___departmentalAndUniversityService',
  ChildrenMediaJsonLogoChildrenContentJsonEducation = 'childrenMediaJson___logo___childrenContentJson___education',
  ChildrenMediaJsonLogoChildrenContentJsonGrantsAndFellowships = 'childrenMediaJson___logo___childrenContentJson___grantsAndFellowships',
  ChildrenMediaJsonLogoChildrenContentJsonId = 'childrenMediaJson___logo___childrenContentJson___id',
  ChildrenMediaJsonLogoChildrenContentJsonInvitedTalks = 'childrenMediaJson___logo___childrenContentJson___invitedTalks',
  ChildrenMediaJsonLogoChildrenContentJsonProfessionalAppointments = 'childrenMediaJson___logo___childrenContentJson___professionalAppointments',
  ChildrenMediaJsonLogoChildrenContentJsonProfessionalMemberships = 'childrenMediaJson___logo___childrenContentJson___professionalMemberships',
  ChildrenMediaJsonLogoChildrenContentJsonReferences = 'childrenMediaJson___logo___childrenContentJson___references',
  ChildrenMediaJsonLogoChildrenContentJsonReviewingExperience = 'childrenMediaJson___logo___childrenContentJson___reviewingExperience',
  ChildrenMediaJsonLogoChildrenContentJsonSelectedPressAndMedia = 'childrenMediaJson___logo___childrenContentJson___selectedPressAndMedia',
  ChildrenMediaJsonLogoChildrenContentJsonServiceToProfession = 'childrenMediaJson___logo___childrenContentJson___serviceToProfession',
  ChildrenMediaJsonLogoChildrenContentJsonTeachingAndSupervisionExperience = 'childrenMediaJson___logo___childrenContentJson___teachingAndSupervisionExperience',
  ChildrenMediaJsonLogoChildrenImageSharp = 'childrenMediaJson___logo___childrenImageSharp',
  ChildrenMediaJsonLogoChildrenImageSharpChildren = 'childrenMediaJson___logo___childrenImageSharp___children',
  ChildrenMediaJsonLogoChildrenImageSharpGatsbyImageData = 'childrenMediaJson___logo___childrenImageSharp___gatsbyImageData',
  ChildrenMediaJsonLogoChildrenImageSharpId = 'childrenMediaJson___logo___childrenImageSharp___id',
  ChildrenMediaJsonLogoChildrenMarkdownRemark = 'childrenMediaJson___logo___childrenMarkdownRemark',
  ChildrenMediaJsonLogoChildrenMarkdownRemarkChildren = 'childrenMediaJson___logo___childrenMarkdownRemark___children',
  ChildrenMediaJsonLogoChildrenMarkdownRemarkExcerpt = 'childrenMediaJson___logo___childrenMarkdownRemark___excerpt',
  ChildrenMediaJsonLogoChildrenMarkdownRemarkExcerptAst = 'childrenMediaJson___logo___childrenMarkdownRemark___excerptAst',
  ChildrenMediaJsonLogoChildrenMarkdownRemarkFileAbsolutePath = 'childrenMediaJson___logo___childrenMarkdownRemark___fileAbsolutePath',
  ChildrenMediaJsonLogoChildrenMarkdownRemarkHeadings = 'childrenMediaJson___logo___childrenMarkdownRemark___headings',
  ChildrenMediaJsonLogoChildrenMarkdownRemarkHtml = 'childrenMediaJson___logo___childrenMarkdownRemark___html',
  ChildrenMediaJsonLogoChildrenMarkdownRemarkHtmlAst = 'childrenMediaJson___logo___childrenMarkdownRemark___htmlAst',
  ChildrenMediaJsonLogoChildrenMarkdownRemarkId = 'childrenMediaJson___logo___childrenMarkdownRemark___id',
  ChildrenMediaJsonLogoChildrenMarkdownRemarkRawMarkdownBody = 'childrenMediaJson___logo___childrenMarkdownRemark___rawMarkdownBody',
  ChildrenMediaJsonLogoChildrenMarkdownRemarkTableOfContents = 'childrenMediaJson___logo___childrenMarkdownRemark___tableOfContents',
  ChildrenMediaJsonLogoChildrenMarkdownRemarkTimeToRead = 'childrenMediaJson___logo___childrenMarkdownRemark___timeToRead',
  ChildrenMediaJsonLogoChildrenMdx = 'childrenMediaJson___logo___childrenMdx',
  ChildrenMediaJsonLogoChildrenMdxBody = 'childrenMediaJson___logo___childrenMdx___body',
  ChildrenMediaJsonLogoChildrenMdxChildren = 'childrenMediaJson___logo___childrenMdx___children',
  ChildrenMediaJsonLogoChildrenMdxExcerpt = 'childrenMediaJson___logo___childrenMdx___excerpt',
  ChildrenMediaJsonLogoChildrenMdxFileAbsolutePath = 'childrenMediaJson___logo___childrenMdx___fileAbsolutePath',
  ChildrenMediaJsonLogoChildrenMdxHeadings = 'childrenMediaJson___logo___childrenMdx___headings',
  ChildrenMediaJsonLogoChildrenMdxHtml = 'childrenMediaJson___logo___childrenMdx___html',
  ChildrenMediaJsonLogoChildrenMdxId = 'childrenMediaJson___logo___childrenMdx___id',
  ChildrenMediaJsonLogoChildrenMdxMdxAst = 'childrenMediaJson___logo___childrenMdx___mdxAST',
  ChildrenMediaJsonLogoChildrenMdxRawBody = 'childrenMediaJson___logo___childrenMdx___rawBody',
  ChildrenMediaJsonLogoChildrenMdxSlug = 'childrenMediaJson___logo___childrenMdx___slug',
  ChildrenMediaJsonLogoChildrenMdxTableOfContents = 'childrenMediaJson___logo___childrenMdx___tableOfContents',
  ChildrenMediaJsonLogoChildrenMdxTimeToRead = 'childrenMediaJson___logo___childrenMdx___timeToRead',
  ChildrenMediaJsonLogoChildrenMediaJson = 'childrenMediaJson___logo___childrenMediaJson',
  ChildrenMediaJsonLogoChildrenMediaJsonChildren = 'childrenMediaJson___logo___childrenMediaJson___children',
  ChildrenMediaJsonLogoChildrenMediaJsonId = 'childrenMediaJson___logo___childrenMediaJson___id',
  ChildrenMediaJsonLogoChildrenMediaJsonName = 'childrenMediaJson___logo___childrenMediaJson___name',
  ChildrenMediaJsonLogoChildrenMediaJsonUrl = 'childrenMediaJson___logo___childrenMediaJson___url',
  ChildrenMediaJsonLogoChildrenPrintJson = 'childrenMediaJson___logo___childrenPrintJson',
  ChildrenMediaJsonLogoChildrenPrintJsonChildren = 'childrenMediaJson___logo___childrenPrintJson___children',
  ChildrenMediaJsonLogoChildrenPrintJsonId = 'childrenMediaJson___logo___childrenPrintJson___id',
  ChildrenMediaJsonLogoChildrenPrintJsonSource = 'childrenMediaJson___logo___childrenPrintJson___source',
  ChildrenMediaJsonLogoChildrenPrintJsonThumbnail = 'childrenMediaJson___logo___childrenPrintJson___thumbnail',
  ChildrenMediaJsonLogoChildrenPrintJsonTitle = 'childrenMediaJson___logo___childrenPrintJson___title',
  ChildrenMediaJsonLogoChildrenPrintJsonUrl = 'childrenMediaJson___logo___childrenPrintJson___url',
  ChildrenMediaJsonLogoChildrenVideoJson = 'childrenMediaJson___logo___childrenVideoJson',
  ChildrenMediaJsonLogoChildrenVideoJsonChildren = 'childrenMediaJson___logo___childrenVideoJson___children',
  ChildrenMediaJsonLogoChildrenVideoJsonId = 'childrenMediaJson___logo___childrenVideoJson___id',
  ChildrenMediaJsonLogoChildrenVideoJsonSource = 'childrenMediaJson___logo___childrenVideoJson___source',
  ChildrenMediaJsonLogoChildrenVideoJsonTitle = 'childrenMediaJson___logo___childrenVideoJson___title',
  ChildrenMediaJsonLogoChildrenVideoJsonUrl = 'childrenMediaJson___logo___childrenVideoJson___url',
  ChildrenMediaJsonLogoChildrenChildren = 'childrenMediaJson___logo___children___children',
  ChildrenMediaJsonLogoChildrenId = 'childrenMediaJson___logo___children___id',
  ChildrenMediaJsonLogoCtime = 'childrenMediaJson___logo___ctime',
  ChildrenMediaJsonLogoCtimeMs = 'childrenMediaJson___logo___ctimeMs',
  ChildrenMediaJsonLogoDev = 'childrenMediaJson___logo___dev',
  ChildrenMediaJsonLogoDir = 'childrenMediaJson___logo___dir',
  ChildrenMediaJsonLogoExt = 'childrenMediaJson___logo___ext',
  ChildrenMediaJsonLogoExtension = 'childrenMediaJson___logo___extension',
  ChildrenMediaJsonLogoGid = 'childrenMediaJson___logo___gid',
  ChildrenMediaJsonLogoId = 'childrenMediaJson___logo___id',
  ChildrenMediaJsonLogoIno = 'childrenMediaJson___logo___ino',
  ChildrenMediaJsonLogoInternalContent = 'childrenMediaJson___logo___internal___content',
  ChildrenMediaJsonLogoInternalContentDigest = 'childrenMediaJson___logo___internal___contentDigest',
  ChildrenMediaJsonLogoInternalDescription = 'childrenMediaJson___logo___internal___description',
  ChildrenMediaJsonLogoInternalFieldOwners = 'childrenMediaJson___logo___internal___fieldOwners',
  ChildrenMediaJsonLogoInternalIgnoreType = 'childrenMediaJson___logo___internal___ignoreType',
  ChildrenMediaJsonLogoInternalMediaType = 'childrenMediaJson___logo___internal___mediaType',
  ChildrenMediaJsonLogoInternalOwner = 'childrenMediaJson___logo___internal___owner',
  ChildrenMediaJsonLogoInternalType = 'childrenMediaJson___logo___internal___type',
  ChildrenMediaJsonLogoMode = 'childrenMediaJson___logo___mode',
  ChildrenMediaJsonLogoModifiedTime = 'childrenMediaJson___logo___modifiedTime',
  ChildrenMediaJsonLogoMtime = 'childrenMediaJson___logo___mtime',
  ChildrenMediaJsonLogoMtimeMs = 'childrenMediaJson___logo___mtimeMs',
  ChildrenMediaJsonLogoName = 'childrenMediaJson___logo___name',
  ChildrenMediaJsonLogoNlink = 'childrenMediaJson___logo___nlink',
  ChildrenMediaJsonLogoParentChildren = 'childrenMediaJson___logo___parent___children',
  ChildrenMediaJsonLogoParentId = 'childrenMediaJson___logo___parent___id',
  ChildrenMediaJsonLogoPrettySize = 'childrenMediaJson___logo___prettySize',
  ChildrenMediaJsonLogoPublicUrl = 'childrenMediaJson___logo___publicURL',
  ChildrenMediaJsonLogoRdev = 'childrenMediaJson___logo___rdev',
  ChildrenMediaJsonLogoRelativeDirectory = 'childrenMediaJson___logo___relativeDirectory',
  ChildrenMediaJsonLogoRelativePath = 'childrenMediaJson___logo___relativePath',
  ChildrenMediaJsonLogoRoot = 'childrenMediaJson___logo___root',
  ChildrenMediaJsonLogoSize = 'childrenMediaJson___logo___size',
  ChildrenMediaJsonLogoSourceInstanceName = 'childrenMediaJson___logo___sourceInstanceName',
  ChildrenMediaJsonLogoUid = 'childrenMediaJson___logo___uid',
  ChildrenMediaJsonName = 'childrenMediaJson___name',
  ChildrenMediaJsonParentChildren = 'childrenMediaJson___parent___children',
  ChildrenMediaJsonParentChildrenChildren = 'childrenMediaJson___parent___children___children',
  ChildrenMediaJsonParentChildrenId = 'childrenMediaJson___parent___children___id',
  ChildrenMediaJsonParentId = 'childrenMediaJson___parent___id',
  ChildrenMediaJsonParentInternalContent = 'childrenMediaJson___parent___internal___content',
  ChildrenMediaJsonParentInternalContentDigest = 'childrenMediaJson___parent___internal___contentDigest',
  ChildrenMediaJsonParentInternalDescription = 'childrenMediaJson___parent___internal___description',
  ChildrenMediaJsonParentInternalFieldOwners = 'childrenMediaJson___parent___internal___fieldOwners',
  ChildrenMediaJsonParentInternalIgnoreType = 'childrenMediaJson___parent___internal___ignoreType',
  ChildrenMediaJsonParentInternalMediaType = 'childrenMediaJson___parent___internal___mediaType',
  ChildrenMediaJsonParentInternalOwner = 'childrenMediaJson___parent___internal___owner',
  ChildrenMediaJsonParentInternalType = 'childrenMediaJson___parent___internal___type',
  ChildrenMediaJsonParentParentChildren = 'childrenMediaJson___parent___parent___children',
  ChildrenMediaJsonParentParentId = 'childrenMediaJson___parent___parent___id',
  ChildrenMediaJsonUrl = 'childrenMediaJson___url',
  ChildrenPrintJson = 'childrenPrintJson',
  ChildrenPrintJsonChildren = 'childrenPrintJson___children',
  ChildrenPrintJsonChildrenChildren = 'childrenPrintJson___children___children',
  ChildrenPrintJsonChildrenChildrenChildren = 'childrenPrintJson___children___children___children',
  ChildrenPrintJsonChildrenChildrenId = 'childrenPrintJson___children___children___id',
  ChildrenPrintJsonChildrenId = 'childrenPrintJson___children___id',
  ChildrenPrintJsonChildrenInternalContent = 'childrenPrintJson___children___internal___content',
  ChildrenPrintJsonChildrenInternalContentDigest = 'childrenPrintJson___children___internal___contentDigest',
  ChildrenPrintJsonChildrenInternalDescription = 'childrenPrintJson___children___internal___description',
  ChildrenPrintJsonChildrenInternalFieldOwners = 'childrenPrintJson___children___internal___fieldOwners',
  ChildrenPrintJsonChildrenInternalIgnoreType = 'childrenPrintJson___children___internal___ignoreType',
  ChildrenPrintJsonChildrenInternalMediaType = 'childrenPrintJson___children___internal___mediaType',
  ChildrenPrintJsonChildrenInternalOwner = 'childrenPrintJson___children___internal___owner',
  ChildrenPrintJsonChildrenInternalType = 'childrenPrintJson___children___internal___type',
  ChildrenPrintJsonChildrenParentChildren = 'childrenPrintJson___children___parent___children',
  ChildrenPrintJsonChildrenParentId = 'childrenPrintJson___children___parent___id',
  ChildrenPrintJsonFieldsCollection = 'childrenPrintJson___fields___collection',
  ChildrenPrintJsonId = 'childrenPrintJson___id',
  ChildrenPrintJsonInternalContent = 'childrenPrintJson___internal___content',
  ChildrenPrintJsonInternalContentDigest = 'childrenPrintJson___internal___contentDigest',
  ChildrenPrintJsonInternalDescription = 'childrenPrintJson___internal___description',
  ChildrenPrintJsonInternalFieldOwners = 'childrenPrintJson___internal___fieldOwners',
  ChildrenPrintJsonInternalIgnoreType = 'childrenPrintJson___internal___ignoreType',
  ChildrenPrintJsonInternalMediaType = 'childrenPrintJson___internal___mediaType',
  ChildrenPrintJsonInternalOwner = 'childrenPrintJson___internal___owner',
  ChildrenPrintJsonInternalType = 'childrenPrintJson___internal___type',
  ChildrenPrintJsonParentChildren = 'childrenPrintJson___parent___children',
  ChildrenPrintJsonParentChildrenChildren = 'childrenPrintJson___parent___children___children',
  ChildrenPrintJsonParentChildrenId = 'childrenPrintJson___parent___children___id',
  ChildrenPrintJsonParentId = 'childrenPrintJson___parent___id',
  ChildrenPrintJsonParentInternalContent = 'childrenPrintJson___parent___internal___content',
  ChildrenPrintJsonParentInternalContentDigest = 'childrenPrintJson___parent___internal___contentDigest',
  ChildrenPrintJsonParentInternalDescription = 'childrenPrintJson___parent___internal___description',
  ChildrenPrintJsonParentInternalFieldOwners = 'childrenPrintJson___parent___internal___fieldOwners',
  ChildrenPrintJsonParentInternalIgnoreType = 'childrenPrintJson___parent___internal___ignoreType',
  ChildrenPrintJsonParentInternalMediaType = 'childrenPrintJson___parent___internal___mediaType',
  ChildrenPrintJsonParentInternalOwner = 'childrenPrintJson___parent___internal___owner',
  ChildrenPrintJsonParentInternalType = 'childrenPrintJson___parent___internal___type',
  ChildrenPrintJsonParentParentChildren = 'childrenPrintJson___parent___parent___children',
  ChildrenPrintJsonParentParentId = 'childrenPrintJson___parent___parent___id',
  ChildrenPrintJsonSource = 'childrenPrintJson___source',
  ChildrenPrintJsonThumbnail = 'childrenPrintJson___thumbnail',
  ChildrenPrintJsonTitle = 'childrenPrintJson___title',
  ChildrenPrintJsonUrl = 'childrenPrintJson___url',
  ChildrenVideoJson = 'childrenVideoJson',
  ChildrenVideoJsonChildren = 'childrenVideoJson___children',
  ChildrenVideoJsonChildrenChildren = 'childrenVideoJson___children___children',
  ChildrenVideoJsonChildrenChildrenChildren = 'childrenVideoJson___children___children___children',
  ChildrenVideoJsonChildrenChildrenId = 'childrenVideoJson___children___children___id',
  ChildrenVideoJsonChildrenId = 'childrenVideoJson___children___id',
  ChildrenVideoJsonChildrenInternalContent = 'childrenVideoJson___children___internal___content',
  ChildrenVideoJsonChildrenInternalContentDigest = 'childrenVideoJson___children___internal___contentDigest',
  ChildrenVideoJsonChildrenInternalDescription = 'childrenVideoJson___children___internal___description',
  ChildrenVideoJsonChildrenInternalFieldOwners = 'childrenVideoJson___children___internal___fieldOwners',
  ChildrenVideoJsonChildrenInternalIgnoreType = 'childrenVideoJson___children___internal___ignoreType',
  ChildrenVideoJsonChildrenInternalMediaType = 'childrenVideoJson___children___internal___mediaType',
  ChildrenVideoJsonChildrenInternalOwner = 'childrenVideoJson___children___internal___owner',
  ChildrenVideoJsonChildrenInternalType = 'childrenVideoJson___children___internal___type',
  ChildrenVideoJsonChildrenParentChildren = 'childrenVideoJson___children___parent___children',
  ChildrenVideoJsonChildrenParentId = 'childrenVideoJson___children___parent___id',
  ChildrenVideoJsonFieldsCollection = 'childrenVideoJson___fields___collection',
  ChildrenVideoJsonId = 'childrenVideoJson___id',
  ChildrenVideoJsonInternalContent = 'childrenVideoJson___internal___content',
  ChildrenVideoJsonInternalContentDigest = 'childrenVideoJson___internal___contentDigest',
  ChildrenVideoJsonInternalDescription = 'childrenVideoJson___internal___description',
  ChildrenVideoJsonInternalFieldOwners = 'childrenVideoJson___internal___fieldOwners',
  ChildrenVideoJsonInternalIgnoreType = 'childrenVideoJson___internal___ignoreType',
  ChildrenVideoJsonInternalMediaType = 'childrenVideoJson___internal___mediaType',
  ChildrenVideoJsonInternalOwner = 'childrenVideoJson___internal___owner',
  ChildrenVideoJsonInternalType = 'childrenVideoJson___internal___type',
  ChildrenVideoJsonParentChildren = 'childrenVideoJson___parent___children',
  ChildrenVideoJsonParentChildrenChildren = 'childrenVideoJson___parent___children___children',
  ChildrenVideoJsonParentChildrenId = 'childrenVideoJson___parent___children___id',
  ChildrenVideoJsonParentId = 'childrenVideoJson___parent___id',
  ChildrenVideoJsonParentInternalContent = 'childrenVideoJson___parent___internal___content',
  ChildrenVideoJsonParentInternalContentDigest = 'childrenVideoJson___parent___internal___contentDigest',
  ChildrenVideoJsonParentInternalDescription = 'childrenVideoJson___parent___internal___description',
  ChildrenVideoJsonParentInternalFieldOwners = 'childrenVideoJson___parent___internal___fieldOwners',
  ChildrenVideoJsonParentInternalIgnoreType = 'childrenVideoJson___parent___internal___ignoreType',
  ChildrenVideoJsonParentInternalMediaType = 'childrenVideoJson___parent___internal___mediaType',
  ChildrenVideoJsonParentInternalOwner = 'childrenVideoJson___parent___internal___owner',
  ChildrenVideoJsonParentInternalType = 'childrenVideoJson___parent___internal___type',
  ChildrenVideoJsonParentParentChildren = 'childrenVideoJson___parent___parent___children',
  ChildrenVideoJsonParentParentId = 'childrenVideoJson___parent___parent___id',
  ChildrenVideoJsonSource = 'childrenVideoJson___source',
  ChildrenVideoJsonTitle = 'childrenVideoJson___title',
  ChildrenVideoJsonUrl = 'childrenVideoJson___url',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  PublicUrl = 'publicURL',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid',
}

export type FileFilterInput = {
  absolutePath?: Maybe<StringQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  childAudioJson?: Maybe<AudioJsonFilterInput>;
  childClientsJson?: Maybe<ClientsJsonFilterInput>;
  childContentJson?: Maybe<ContentJsonFilterInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
  childMediaJson?: Maybe<MediaJsonFilterInput>;
  childPrintJson?: Maybe<PrintJsonFilterInput>;
  childVideoJson?: Maybe<VideoJsonFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  childrenAudioJson?: Maybe<AudioJsonFilterListInput>;
  childrenClientsJson?: Maybe<ClientsJsonFilterListInput>;
  childrenContentJson?: Maybe<ContentJsonFilterListInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childrenMediaJson?: Maybe<MediaJsonFilterListInput>;
  childrenPrintJson?: Maybe<PrintJsonFilterListInput>;
  childrenVideoJson?: Maybe<VideoJsonFilterListInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum HeadingsMdx {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE',
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP',
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG',
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  children: Array<Node>;
  fields?: Maybe<ImageSharpFields>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  background?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone?: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  traceSVG?: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpFluidArgs = {
  background?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone?: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  maxWidth?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  traceSVG?: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality?: Maybe<Scalars['Int']>;
};

export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: Maybe<Scalars['Float']>;
  avifOptions?: Maybe<AvifOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
  blurredOptions?: Maybe<BlurredOptions>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  height?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  layout?: Maybe<ImageLayout>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  placeholder?: Maybe<ImagePlaceholder>;
  pngOptions?: Maybe<PngOptions>;
  quality?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  tracedSVGOptions?: Maybe<Potrace>;
  transformOptions?: Maybe<TransformOptions>;
  webpOptions?: Maybe<WebPOptions>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeArgs = {
  background?: Maybe<Scalars['String']>;
  base64?: Maybe<Scalars['Boolean']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone?: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  traceSVG?: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFields = {
  __typename?: 'ImageSharpFields';
  collection?: Maybe<Scalars['String']>;
};

export enum ImageSharpFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FieldsCollection = 'fields___collection',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedBase64 = 'fixed___base64',
  FixedHeight = 'fixed___height',
  FixedOriginalName = 'fixed___originalName',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedWidth = 'fixed___width',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidBase64 = 'fluid___base64',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationHeight = 'fluid___presentationHeight',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidSizes = 'fluid___sizes',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidTracedSvg = 'fluid___tracedSVG',
  GatsbyImageData = 'gatsbyImageData',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  OriginalWidth = 'original___width',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeHeight = 'resize___height',
  ResizeOriginalName = 'resize___originalName',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
}

export type ImageSharpFieldsFilterInput = {
  collection?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  fields?: Maybe<ImageSharpFieldsFilterInput>;
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive?: Maybe<Scalars['Boolean']>;
  quality?: Maybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  ne?: Maybe<Scalars['JSON']>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Plain = 'PLAIN',
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  depth?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MarkdownHeadingFilterInput = {
  depth?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  children: Array<Node>;
  excerpt?: Maybe<Scalars['String']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  fields?: Maybe<MarkdownRemarkFields>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  tableOfContents?: Maybe<Scalars['String']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MarkdownWordCount>;
};

export type MarkdownRemarkExcerptArgs = {
  format?: Maybe<MarkdownExcerptFormats>;
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};

export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  heading?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  pathToSlugField?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MarkdownRemarkEdge>;
  group: Array<MarkdownRemarkGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  __typename?: 'MarkdownRemarkFields';
  collection?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum MarkdownRemarkFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Excerpt = 'excerpt',
  ExcerptAst = 'excerptAst',
  FieldsCollection = 'fields___collection',
  FieldsPath = 'fields___path',
  FieldsSlug = 'fields___slug',
  FieldsTags = 'fields___tags',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterCategory = 'frontmatter___category',
  FrontmatterCoverAbsolutePath = 'frontmatter___cover___absolutePath',
  FrontmatterCoverAccessTime = 'frontmatter___cover___accessTime',
  FrontmatterCoverAtime = 'frontmatter___cover___atime',
  FrontmatterCoverAtimeMs = 'frontmatter___cover___atimeMs',
  FrontmatterCoverBase = 'frontmatter___cover___base',
  FrontmatterCoverBirthTime = 'frontmatter___cover___birthTime',
  FrontmatterCoverBirthtime = 'frontmatter___cover___birthtime',
  FrontmatterCoverBirthtimeMs = 'frontmatter___cover___birthtimeMs',
  FrontmatterCoverBlksize = 'frontmatter___cover___blksize',
  FrontmatterCoverBlocks = 'frontmatter___cover___blocks',
  FrontmatterCoverChangeTime = 'frontmatter___cover___changeTime',
  FrontmatterCoverChildAudioJsonChildren = 'frontmatter___cover___childAudioJson___children',
  FrontmatterCoverChildAudioJsonId = 'frontmatter___cover___childAudioJson___id',
  FrontmatterCoverChildAudioJsonSource = 'frontmatter___cover___childAudioJson___source',
  FrontmatterCoverChildAudioJsonTitle = 'frontmatter___cover___childAudioJson___title',
  FrontmatterCoverChildAudioJsonUrl = 'frontmatter___cover___childAudioJson___url',
  FrontmatterCoverChildClientsJsonChildren = 'frontmatter___cover___childClientsJson___children',
  FrontmatterCoverChildClientsJsonId = 'frontmatter___cover___childClientsJson___id',
  FrontmatterCoverChildClientsJsonName = 'frontmatter___cover___childClientsJson___name',
  FrontmatterCoverChildClientsJsonUrl = 'frontmatter___cover___childClientsJson___url',
  FrontmatterCoverChildContentJsonChildren = 'frontmatter___cover___childContentJson___children',
  FrontmatterCoverChildContentJsonDepartmentalAndUniversityService = 'frontmatter___cover___childContentJson___departmentalAndUniversityService',
  FrontmatterCoverChildContentJsonEducation = 'frontmatter___cover___childContentJson___education',
  FrontmatterCoverChildContentJsonGrantsAndFellowships = 'frontmatter___cover___childContentJson___grantsAndFellowships',
  FrontmatterCoverChildContentJsonId = 'frontmatter___cover___childContentJson___id',
  FrontmatterCoverChildContentJsonInvitedTalks = 'frontmatter___cover___childContentJson___invitedTalks',
  FrontmatterCoverChildContentJsonProfessionalAppointments = 'frontmatter___cover___childContentJson___professionalAppointments',
  FrontmatterCoverChildContentJsonProfessionalMemberships = 'frontmatter___cover___childContentJson___professionalMemberships',
  FrontmatterCoverChildContentJsonReferences = 'frontmatter___cover___childContentJson___references',
  FrontmatterCoverChildContentJsonReviewingExperience = 'frontmatter___cover___childContentJson___reviewingExperience',
  FrontmatterCoverChildContentJsonSelectedPressAndMedia = 'frontmatter___cover___childContentJson___selectedPressAndMedia',
  FrontmatterCoverChildContentJsonServiceToProfession = 'frontmatter___cover___childContentJson___serviceToProfession',
  FrontmatterCoverChildContentJsonTeachingAndSupervisionExperience = 'frontmatter___cover___childContentJson___teachingAndSupervisionExperience',
  FrontmatterCoverChildImageSharpChildren = 'frontmatter___cover___childImageSharp___children',
  FrontmatterCoverChildImageSharpGatsbyImageData = 'frontmatter___cover___childImageSharp___gatsbyImageData',
  FrontmatterCoverChildImageSharpId = 'frontmatter___cover___childImageSharp___id',
  FrontmatterCoverChildMarkdownRemarkChildren = 'frontmatter___cover___childMarkdownRemark___children',
  FrontmatterCoverChildMarkdownRemarkExcerpt = 'frontmatter___cover___childMarkdownRemark___excerpt',
  FrontmatterCoverChildMarkdownRemarkExcerptAst = 'frontmatter___cover___childMarkdownRemark___excerptAst',
  FrontmatterCoverChildMarkdownRemarkFileAbsolutePath = 'frontmatter___cover___childMarkdownRemark___fileAbsolutePath',
  FrontmatterCoverChildMarkdownRemarkHeadings = 'frontmatter___cover___childMarkdownRemark___headings',
  FrontmatterCoverChildMarkdownRemarkHtml = 'frontmatter___cover___childMarkdownRemark___html',
  FrontmatterCoverChildMarkdownRemarkHtmlAst = 'frontmatter___cover___childMarkdownRemark___htmlAst',
  FrontmatterCoverChildMarkdownRemarkId = 'frontmatter___cover___childMarkdownRemark___id',
  FrontmatterCoverChildMarkdownRemarkRawMarkdownBody = 'frontmatter___cover___childMarkdownRemark___rawMarkdownBody',
  FrontmatterCoverChildMarkdownRemarkTableOfContents = 'frontmatter___cover___childMarkdownRemark___tableOfContents',
  FrontmatterCoverChildMarkdownRemarkTimeToRead = 'frontmatter___cover___childMarkdownRemark___timeToRead',
  FrontmatterCoverChildMdxBody = 'frontmatter___cover___childMdx___body',
  FrontmatterCoverChildMdxChildren = 'frontmatter___cover___childMdx___children',
  FrontmatterCoverChildMdxExcerpt = 'frontmatter___cover___childMdx___excerpt',
  FrontmatterCoverChildMdxFileAbsolutePath = 'frontmatter___cover___childMdx___fileAbsolutePath',
  FrontmatterCoverChildMdxHeadings = 'frontmatter___cover___childMdx___headings',
  FrontmatterCoverChildMdxHtml = 'frontmatter___cover___childMdx___html',
  FrontmatterCoverChildMdxId = 'frontmatter___cover___childMdx___id',
  FrontmatterCoverChildMdxMdxAst = 'frontmatter___cover___childMdx___mdxAST',
  FrontmatterCoverChildMdxRawBody = 'frontmatter___cover___childMdx___rawBody',
  FrontmatterCoverChildMdxSlug = 'frontmatter___cover___childMdx___slug',
  FrontmatterCoverChildMdxTableOfContents = 'frontmatter___cover___childMdx___tableOfContents',
  FrontmatterCoverChildMdxTimeToRead = 'frontmatter___cover___childMdx___timeToRead',
  FrontmatterCoverChildMediaJsonChildren = 'frontmatter___cover___childMediaJson___children',
  FrontmatterCoverChildMediaJsonId = 'frontmatter___cover___childMediaJson___id',
  FrontmatterCoverChildMediaJsonName = 'frontmatter___cover___childMediaJson___name',
  FrontmatterCoverChildMediaJsonUrl = 'frontmatter___cover___childMediaJson___url',
  FrontmatterCoverChildPrintJsonChildren = 'frontmatter___cover___childPrintJson___children',
  FrontmatterCoverChildPrintJsonId = 'frontmatter___cover___childPrintJson___id',
  FrontmatterCoverChildPrintJsonSource = 'frontmatter___cover___childPrintJson___source',
  FrontmatterCoverChildPrintJsonThumbnail = 'frontmatter___cover___childPrintJson___thumbnail',
  FrontmatterCoverChildPrintJsonTitle = 'frontmatter___cover___childPrintJson___title',
  FrontmatterCoverChildPrintJsonUrl = 'frontmatter___cover___childPrintJson___url',
  FrontmatterCoverChildVideoJsonChildren = 'frontmatter___cover___childVideoJson___children',
  FrontmatterCoverChildVideoJsonId = 'frontmatter___cover___childVideoJson___id',
  FrontmatterCoverChildVideoJsonSource = 'frontmatter___cover___childVideoJson___source',
  FrontmatterCoverChildVideoJsonTitle = 'frontmatter___cover___childVideoJson___title',
  FrontmatterCoverChildVideoJsonUrl = 'frontmatter___cover___childVideoJson___url',
  FrontmatterCoverChildren = 'frontmatter___cover___children',
  FrontmatterCoverChildrenAudioJson = 'frontmatter___cover___childrenAudioJson',
  FrontmatterCoverChildrenAudioJsonChildren = 'frontmatter___cover___childrenAudioJson___children',
  FrontmatterCoverChildrenAudioJsonId = 'frontmatter___cover___childrenAudioJson___id',
  FrontmatterCoverChildrenAudioJsonSource = 'frontmatter___cover___childrenAudioJson___source',
  FrontmatterCoverChildrenAudioJsonTitle = 'frontmatter___cover___childrenAudioJson___title',
  FrontmatterCoverChildrenAudioJsonUrl = 'frontmatter___cover___childrenAudioJson___url',
  FrontmatterCoverChildrenClientsJson = 'frontmatter___cover___childrenClientsJson',
  FrontmatterCoverChildrenClientsJsonChildren = 'frontmatter___cover___childrenClientsJson___children',
  FrontmatterCoverChildrenClientsJsonId = 'frontmatter___cover___childrenClientsJson___id',
  FrontmatterCoverChildrenClientsJsonName = 'frontmatter___cover___childrenClientsJson___name',
  FrontmatterCoverChildrenClientsJsonUrl = 'frontmatter___cover___childrenClientsJson___url',
  FrontmatterCoverChildrenContentJson = 'frontmatter___cover___childrenContentJson',
  FrontmatterCoverChildrenContentJsonChildren = 'frontmatter___cover___childrenContentJson___children',
  FrontmatterCoverChildrenContentJsonDepartmentalAndUniversityService = 'frontmatter___cover___childrenContentJson___departmentalAndUniversityService',
  FrontmatterCoverChildrenContentJsonEducation = 'frontmatter___cover___childrenContentJson___education',
  FrontmatterCoverChildrenContentJsonGrantsAndFellowships = 'frontmatter___cover___childrenContentJson___grantsAndFellowships',
  FrontmatterCoverChildrenContentJsonId = 'frontmatter___cover___childrenContentJson___id',
  FrontmatterCoverChildrenContentJsonInvitedTalks = 'frontmatter___cover___childrenContentJson___invitedTalks',
  FrontmatterCoverChildrenContentJsonProfessionalAppointments = 'frontmatter___cover___childrenContentJson___professionalAppointments',
  FrontmatterCoverChildrenContentJsonProfessionalMemberships = 'frontmatter___cover___childrenContentJson___professionalMemberships',
  FrontmatterCoverChildrenContentJsonReferences = 'frontmatter___cover___childrenContentJson___references',
  FrontmatterCoverChildrenContentJsonReviewingExperience = 'frontmatter___cover___childrenContentJson___reviewingExperience',
  FrontmatterCoverChildrenContentJsonSelectedPressAndMedia = 'frontmatter___cover___childrenContentJson___selectedPressAndMedia',
  FrontmatterCoverChildrenContentJsonServiceToProfession = 'frontmatter___cover___childrenContentJson___serviceToProfession',
  FrontmatterCoverChildrenContentJsonTeachingAndSupervisionExperience = 'frontmatter___cover___childrenContentJson___teachingAndSupervisionExperience',
  FrontmatterCoverChildrenImageSharp = 'frontmatter___cover___childrenImageSharp',
  FrontmatterCoverChildrenImageSharpChildren = 'frontmatter___cover___childrenImageSharp___children',
  FrontmatterCoverChildrenImageSharpGatsbyImageData = 'frontmatter___cover___childrenImageSharp___gatsbyImageData',
  FrontmatterCoverChildrenImageSharpId = 'frontmatter___cover___childrenImageSharp___id',
  FrontmatterCoverChildrenMarkdownRemark = 'frontmatter___cover___childrenMarkdownRemark',
  FrontmatterCoverChildrenMarkdownRemarkChildren = 'frontmatter___cover___childrenMarkdownRemark___children',
  FrontmatterCoverChildrenMarkdownRemarkExcerpt = 'frontmatter___cover___childrenMarkdownRemark___excerpt',
  FrontmatterCoverChildrenMarkdownRemarkExcerptAst = 'frontmatter___cover___childrenMarkdownRemark___excerptAst',
  FrontmatterCoverChildrenMarkdownRemarkFileAbsolutePath = 'frontmatter___cover___childrenMarkdownRemark___fileAbsolutePath',
  FrontmatterCoverChildrenMarkdownRemarkHeadings = 'frontmatter___cover___childrenMarkdownRemark___headings',
  FrontmatterCoverChildrenMarkdownRemarkHtml = 'frontmatter___cover___childrenMarkdownRemark___html',
  FrontmatterCoverChildrenMarkdownRemarkHtmlAst = 'frontmatter___cover___childrenMarkdownRemark___htmlAst',
  FrontmatterCoverChildrenMarkdownRemarkId = 'frontmatter___cover___childrenMarkdownRemark___id',
  FrontmatterCoverChildrenMarkdownRemarkRawMarkdownBody = 'frontmatter___cover___childrenMarkdownRemark___rawMarkdownBody',
  FrontmatterCoverChildrenMarkdownRemarkTableOfContents = 'frontmatter___cover___childrenMarkdownRemark___tableOfContents',
  FrontmatterCoverChildrenMarkdownRemarkTimeToRead = 'frontmatter___cover___childrenMarkdownRemark___timeToRead',
  FrontmatterCoverChildrenMdx = 'frontmatter___cover___childrenMdx',
  FrontmatterCoverChildrenMdxBody = 'frontmatter___cover___childrenMdx___body',
  FrontmatterCoverChildrenMdxChildren = 'frontmatter___cover___childrenMdx___children',
  FrontmatterCoverChildrenMdxExcerpt = 'frontmatter___cover___childrenMdx___excerpt',
  FrontmatterCoverChildrenMdxFileAbsolutePath = 'frontmatter___cover___childrenMdx___fileAbsolutePath',
  FrontmatterCoverChildrenMdxHeadings = 'frontmatter___cover___childrenMdx___headings',
  FrontmatterCoverChildrenMdxHtml = 'frontmatter___cover___childrenMdx___html',
  FrontmatterCoverChildrenMdxId = 'frontmatter___cover___childrenMdx___id',
  FrontmatterCoverChildrenMdxMdxAst = 'frontmatter___cover___childrenMdx___mdxAST',
  FrontmatterCoverChildrenMdxRawBody = 'frontmatter___cover___childrenMdx___rawBody',
  FrontmatterCoverChildrenMdxSlug = 'frontmatter___cover___childrenMdx___slug',
  FrontmatterCoverChildrenMdxTableOfContents = 'frontmatter___cover___childrenMdx___tableOfContents',
  FrontmatterCoverChildrenMdxTimeToRead = 'frontmatter___cover___childrenMdx___timeToRead',
  FrontmatterCoverChildrenMediaJson = 'frontmatter___cover___childrenMediaJson',
  FrontmatterCoverChildrenMediaJsonChildren = 'frontmatter___cover___childrenMediaJson___children',
  FrontmatterCoverChildrenMediaJsonId = 'frontmatter___cover___childrenMediaJson___id',
  FrontmatterCoverChildrenMediaJsonName = 'frontmatter___cover___childrenMediaJson___name',
  FrontmatterCoverChildrenMediaJsonUrl = 'frontmatter___cover___childrenMediaJson___url',
  FrontmatterCoverChildrenPrintJson = 'frontmatter___cover___childrenPrintJson',
  FrontmatterCoverChildrenPrintJsonChildren = 'frontmatter___cover___childrenPrintJson___children',
  FrontmatterCoverChildrenPrintJsonId = 'frontmatter___cover___childrenPrintJson___id',
  FrontmatterCoverChildrenPrintJsonSource = 'frontmatter___cover___childrenPrintJson___source',
  FrontmatterCoverChildrenPrintJsonThumbnail = 'frontmatter___cover___childrenPrintJson___thumbnail',
  FrontmatterCoverChildrenPrintJsonTitle = 'frontmatter___cover___childrenPrintJson___title',
  FrontmatterCoverChildrenPrintJsonUrl = 'frontmatter___cover___childrenPrintJson___url',
  FrontmatterCoverChildrenVideoJson = 'frontmatter___cover___childrenVideoJson',
  FrontmatterCoverChildrenVideoJsonChildren = 'frontmatter___cover___childrenVideoJson___children',
  FrontmatterCoverChildrenVideoJsonId = 'frontmatter___cover___childrenVideoJson___id',
  FrontmatterCoverChildrenVideoJsonSource = 'frontmatter___cover___childrenVideoJson___source',
  FrontmatterCoverChildrenVideoJsonTitle = 'frontmatter___cover___childrenVideoJson___title',
  FrontmatterCoverChildrenVideoJsonUrl = 'frontmatter___cover___childrenVideoJson___url',
  FrontmatterCoverChildrenChildren = 'frontmatter___cover___children___children',
  FrontmatterCoverChildrenId = 'frontmatter___cover___children___id',
  FrontmatterCoverCtime = 'frontmatter___cover___ctime',
  FrontmatterCoverCtimeMs = 'frontmatter___cover___ctimeMs',
  FrontmatterCoverDev = 'frontmatter___cover___dev',
  FrontmatterCoverDir = 'frontmatter___cover___dir',
  FrontmatterCoverExt = 'frontmatter___cover___ext',
  FrontmatterCoverExtension = 'frontmatter___cover___extension',
  FrontmatterCoverGid = 'frontmatter___cover___gid',
  FrontmatterCoverId = 'frontmatter___cover___id',
  FrontmatterCoverIno = 'frontmatter___cover___ino',
  FrontmatterCoverInternalContent = 'frontmatter___cover___internal___content',
  FrontmatterCoverInternalContentDigest = 'frontmatter___cover___internal___contentDigest',
  FrontmatterCoverInternalDescription = 'frontmatter___cover___internal___description',
  FrontmatterCoverInternalFieldOwners = 'frontmatter___cover___internal___fieldOwners',
  FrontmatterCoverInternalIgnoreType = 'frontmatter___cover___internal___ignoreType',
  FrontmatterCoverInternalMediaType = 'frontmatter___cover___internal___mediaType',
  FrontmatterCoverInternalOwner = 'frontmatter___cover___internal___owner',
  FrontmatterCoverInternalType = 'frontmatter___cover___internal___type',
  FrontmatterCoverMode = 'frontmatter___cover___mode',
  FrontmatterCoverModifiedTime = 'frontmatter___cover___modifiedTime',
  FrontmatterCoverMtime = 'frontmatter___cover___mtime',
  FrontmatterCoverMtimeMs = 'frontmatter___cover___mtimeMs',
  FrontmatterCoverName = 'frontmatter___cover___name',
  FrontmatterCoverNlink = 'frontmatter___cover___nlink',
  FrontmatterCoverParentChildren = 'frontmatter___cover___parent___children',
  FrontmatterCoverParentId = 'frontmatter___cover___parent___id',
  FrontmatterCoverPrettySize = 'frontmatter___cover___prettySize',
  FrontmatterCoverPublicUrl = 'frontmatter___cover___publicURL',
  FrontmatterCoverRdev = 'frontmatter___cover___rdev',
  FrontmatterCoverRelativeDirectory = 'frontmatter___cover___relativeDirectory',
  FrontmatterCoverRelativePath = 'frontmatter___cover___relativePath',
  FrontmatterCoverRoot = 'frontmatter___cover___root',
  FrontmatterCoverSize = 'frontmatter___cover___size',
  FrontmatterCoverSourceInstanceName = 'frontmatter___cover___sourceInstanceName',
  FrontmatterCoverUid = 'frontmatter___cover___uid',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterIsbn10 = 'frontmatter___isbn10',
  FrontmatterIsbn13 = 'frontmatter___isbn13',
  FrontmatterLayout = 'frontmatter___layout',
  FrontmatterProductIdAmazon = 'frontmatter___productId___amazon',
  FrontmatterProductIdIndiebound = 'frontmatter___productId___indiebound',
  FrontmatterReviews = 'frontmatter___reviews',
  FrontmatterReviewsAuthor = 'frontmatter___reviews___author',
  FrontmatterReviewsAuthorTitle = 'frontmatter___reviews___authorTitle',
  FrontmatterReviewsText = 'frontmatter___reviews___text',
  FrontmatterSubtitle = 'frontmatter___subtitle',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterTitle = 'frontmatter___title',
  Headings = 'headings',
  HeadingsDepth = 'headings___depth',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  Html = 'html',
  HtmlAst = 'htmlAst',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  RawMarkdownBody = 'rawMarkdownBody',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
}

export type MarkdownRemarkFieldsFilterInput = {
  collection?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  category?: Maybe<Scalars['String']>;
  cover?: Maybe<File>;
  date?: Maybe<Scalars['Date']>;
  isbn10?: Maybe<Scalars['String']>;
  isbn13?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  productId?: Maybe<MarkdownRemarkFrontmatterProductId>;
  reviews?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterReviews>>>;
  subtitle?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterDateArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  category?: Maybe<StringQueryOperatorInput>;
  cover?: Maybe<FileFilterInput>;
  date?: Maybe<DateQueryOperatorInput>;
  isbn10?: Maybe<StringQueryOperatorInput>;
  isbn13?: Maybe<StringQueryOperatorInput>;
  layout?: Maybe<StringQueryOperatorInput>;
  productId?: Maybe<MarkdownRemarkFrontmatterProductIdFilterInput>;
  reviews?: Maybe<MarkdownRemarkFrontmatterReviewsFilterListInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterProductId = {
  __typename?: 'MarkdownRemarkFrontmatterProductId';
  amazon?: Maybe<Scalars['String']>;
  indiebound?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterProductIdFilterInput = {
  amazon?: Maybe<StringQueryOperatorInput>;
  indiebound?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterReviews = {
  __typename?: 'MarkdownRemarkFrontmatterReviews';
  author?: Maybe<Scalars['String']>;
  authorTitle?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterReviewsFilterInput = {
  author?: Maybe<StringQueryOperatorInput>;
  authorTitle?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterReviewsFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFrontmatterReviewsFilterInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MarkdownRemarkEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkGroupConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type Mdx = Node & {
  __typename?: 'Mdx';
  body: Scalars['String'];
  children: Array<Node>;
  excerpt: Scalars['String'];
  fields?: Maybe<MdxFields>;
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  mdxAST?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  rawBody: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
};

export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};

export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};

export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type MdxConnection = {
  __typename?: 'MdxConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MdxEdge>;
  group: Array<MdxGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  __typename?: 'MdxEdge';
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxFields = {
  __typename?: 'MdxFields';
  collection?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export enum MdxFieldsEnum {
  Body = 'body',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Excerpt = 'excerpt',
  FieldsCollection = 'fields___collection',
  FieldsSlug = 'fields___slug',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterTitle = 'frontmatter___title',
  Headings = 'headings',
  HeadingsDepth = 'headings___depth',
  HeadingsValue = 'headings___value',
  Html = 'html',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MdxAst = 'mdxAST',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  RawBody = 'rawBody',
  Slug = 'slug',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
}

export type MdxFieldsFilterInput = {
  collection?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type MdxFilterInput = {
  body?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MdxFieldsFilterInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  rawBody?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch?: Maybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  __typename?: 'MdxFrontmatter';
  title: Scalars['String'];
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  __typename?: 'MdxGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MdxEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<MdxGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxHeadingMdx = {
  __typename?: 'MdxHeadingMdx';
  depth?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdxFilterInput = {
  depth?: Maybe<IntQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  __typename?: 'MdxWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type MediaJson = Node & {
  __typename?: 'MediaJson';
  children: Array<Node>;
  fields?: Maybe<MediaJsonFields>;
  id: Scalars['ID'];
  internal: Internal;
  logo?: Maybe<File>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  url?: Maybe<Scalars['String']>;
};

export type MediaJsonConnection = {
  __typename?: 'MediaJsonConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MediaJsonEdge>;
  group: Array<MediaJsonGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<MediaJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type MediaJsonConnectionDistinctArgs = {
  field: MediaJsonFieldsEnum;
};

export type MediaJsonConnectionGroupArgs = {
  field: MediaJsonFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type MediaJsonConnectionMaxArgs = {
  field: MediaJsonFieldsEnum;
};

export type MediaJsonConnectionMinArgs = {
  field: MediaJsonFieldsEnum;
};

export type MediaJsonConnectionSumArgs = {
  field: MediaJsonFieldsEnum;
};

export type MediaJsonEdge = {
  __typename?: 'MediaJsonEdge';
  next?: Maybe<MediaJson>;
  node: MediaJson;
  previous?: Maybe<MediaJson>;
};

export type MediaJsonFields = {
  __typename?: 'MediaJsonFields';
  collection?: Maybe<Scalars['String']>;
};

export enum MediaJsonFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FieldsCollection = 'fields___collection',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  LogoAbsolutePath = 'logo___absolutePath',
  LogoAccessTime = 'logo___accessTime',
  LogoAtime = 'logo___atime',
  LogoAtimeMs = 'logo___atimeMs',
  LogoBase = 'logo___base',
  LogoBirthTime = 'logo___birthTime',
  LogoBirthtime = 'logo___birthtime',
  LogoBirthtimeMs = 'logo___birthtimeMs',
  LogoBlksize = 'logo___blksize',
  LogoBlocks = 'logo___blocks',
  LogoChangeTime = 'logo___changeTime',
  LogoChildAudioJsonChildren = 'logo___childAudioJson___children',
  LogoChildAudioJsonChildrenChildren = 'logo___childAudioJson___children___children',
  LogoChildAudioJsonChildrenId = 'logo___childAudioJson___children___id',
  LogoChildAudioJsonFieldsCollection = 'logo___childAudioJson___fields___collection',
  LogoChildAudioJsonId = 'logo___childAudioJson___id',
  LogoChildAudioJsonInternalContent = 'logo___childAudioJson___internal___content',
  LogoChildAudioJsonInternalContentDigest = 'logo___childAudioJson___internal___contentDigest',
  LogoChildAudioJsonInternalDescription = 'logo___childAudioJson___internal___description',
  LogoChildAudioJsonInternalFieldOwners = 'logo___childAudioJson___internal___fieldOwners',
  LogoChildAudioJsonInternalIgnoreType = 'logo___childAudioJson___internal___ignoreType',
  LogoChildAudioJsonInternalMediaType = 'logo___childAudioJson___internal___mediaType',
  LogoChildAudioJsonInternalOwner = 'logo___childAudioJson___internal___owner',
  LogoChildAudioJsonInternalType = 'logo___childAudioJson___internal___type',
  LogoChildAudioJsonParentChildren = 'logo___childAudioJson___parent___children',
  LogoChildAudioJsonParentId = 'logo___childAudioJson___parent___id',
  LogoChildAudioJsonSource = 'logo___childAudioJson___source',
  LogoChildAudioJsonTitle = 'logo___childAudioJson___title',
  LogoChildAudioJsonUrl = 'logo___childAudioJson___url',
  LogoChildClientsJsonChildren = 'logo___childClientsJson___children',
  LogoChildClientsJsonChildrenChildren = 'logo___childClientsJson___children___children',
  LogoChildClientsJsonChildrenId = 'logo___childClientsJson___children___id',
  LogoChildClientsJsonFieldsCollection = 'logo___childClientsJson___fields___collection',
  LogoChildClientsJsonId = 'logo___childClientsJson___id',
  LogoChildClientsJsonInternalContent = 'logo___childClientsJson___internal___content',
  LogoChildClientsJsonInternalContentDigest = 'logo___childClientsJson___internal___contentDigest',
  LogoChildClientsJsonInternalDescription = 'logo___childClientsJson___internal___description',
  LogoChildClientsJsonInternalFieldOwners = 'logo___childClientsJson___internal___fieldOwners',
  LogoChildClientsJsonInternalIgnoreType = 'logo___childClientsJson___internal___ignoreType',
  LogoChildClientsJsonInternalMediaType = 'logo___childClientsJson___internal___mediaType',
  LogoChildClientsJsonInternalOwner = 'logo___childClientsJson___internal___owner',
  LogoChildClientsJsonInternalType = 'logo___childClientsJson___internal___type',
  LogoChildClientsJsonLogoAbsolutePath = 'logo___childClientsJson___logo___absolutePath',
  LogoChildClientsJsonLogoAccessTime = 'logo___childClientsJson___logo___accessTime',
  LogoChildClientsJsonLogoAtime = 'logo___childClientsJson___logo___atime',
  LogoChildClientsJsonLogoAtimeMs = 'logo___childClientsJson___logo___atimeMs',
  LogoChildClientsJsonLogoBase = 'logo___childClientsJson___logo___base',
  LogoChildClientsJsonLogoBirthTime = 'logo___childClientsJson___logo___birthTime',
  LogoChildClientsJsonLogoBirthtime = 'logo___childClientsJson___logo___birthtime',
  LogoChildClientsJsonLogoBirthtimeMs = 'logo___childClientsJson___logo___birthtimeMs',
  LogoChildClientsJsonLogoBlksize = 'logo___childClientsJson___logo___blksize',
  LogoChildClientsJsonLogoBlocks = 'logo___childClientsJson___logo___blocks',
  LogoChildClientsJsonLogoChangeTime = 'logo___childClientsJson___logo___changeTime',
  LogoChildClientsJsonLogoChildren = 'logo___childClientsJson___logo___children',
  LogoChildClientsJsonLogoChildrenAudioJson = 'logo___childClientsJson___logo___childrenAudioJson',
  LogoChildClientsJsonLogoChildrenClientsJson = 'logo___childClientsJson___logo___childrenClientsJson',
  LogoChildClientsJsonLogoChildrenContentJson = 'logo___childClientsJson___logo___childrenContentJson',
  LogoChildClientsJsonLogoChildrenImageSharp = 'logo___childClientsJson___logo___childrenImageSharp',
  LogoChildClientsJsonLogoChildrenMarkdownRemark = 'logo___childClientsJson___logo___childrenMarkdownRemark',
  LogoChildClientsJsonLogoChildrenMdx = 'logo___childClientsJson___logo___childrenMdx',
  LogoChildClientsJsonLogoChildrenMediaJson = 'logo___childClientsJson___logo___childrenMediaJson',
  LogoChildClientsJsonLogoChildrenPrintJson = 'logo___childClientsJson___logo___childrenPrintJson',
  LogoChildClientsJsonLogoChildrenVideoJson = 'logo___childClientsJson___logo___childrenVideoJson',
  LogoChildClientsJsonLogoCtime = 'logo___childClientsJson___logo___ctime',
  LogoChildClientsJsonLogoCtimeMs = 'logo___childClientsJson___logo___ctimeMs',
  LogoChildClientsJsonLogoDev = 'logo___childClientsJson___logo___dev',
  LogoChildClientsJsonLogoDir = 'logo___childClientsJson___logo___dir',
  LogoChildClientsJsonLogoExt = 'logo___childClientsJson___logo___ext',
  LogoChildClientsJsonLogoExtension = 'logo___childClientsJson___logo___extension',
  LogoChildClientsJsonLogoGid = 'logo___childClientsJson___logo___gid',
  LogoChildClientsJsonLogoId = 'logo___childClientsJson___logo___id',
  LogoChildClientsJsonLogoIno = 'logo___childClientsJson___logo___ino',
  LogoChildClientsJsonLogoMode = 'logo___childClientsJson___logo___mode',
  LogoChildClientsJsonLogoModifiedTime = 'logo___childClientsJson___logo___modifiedTime',
  LogoChildClientsJsonLogoMtime = 'logo___childClientsJson___logo___mtime',
  LogoChildClientsJsonLogoMtimeMs = 'logo___childClientsJson___logo___mtimeMs',
  LogoChildClientsJsonLogoName = 'logo___childClientsJson___logo___name',
  LogoChildClientsJsonLogoNlink = 'logo___childClientsJson___logo___nlink',
  LogoChildClientsJsonLogoPrettySize = 'logo___childClientsJson___logo___prettySize',
  LogoChildClientsJsonLogoPublicUrl = 'logo___childClientsJson___logo___publicURL',
  LogoChildClientsJsonLogoRdev = 'logo___childClientsJson___logo___rdev',
  LogoChildClientsJsonLogoRelativeDirectory = 'logo___childClientsJson___logo___relativeDirectory',
  LogoChildClientsJsonLogoRelativePath = 'logo___childClientsJson___logo___relativePath',
  LogoChildClientsJsonLogoRoot = 'logo___childClientsJson___logo___root',
  LogoChildClientsJsonLogoSize = 'logo___childClientsJson___logo___size',
  LogoChildClientsJsonLogoSourceInstanceName = 'logo___childClientsJson___logo___sourceInstanceName',
  LogoChildClientsJsonLogoUid = 'logo___childClientsJson___logo___uid',
  LogoChildClientsJsonName = 'logo___childClientsJson___name',
  LogoChildClientsJsonParentChildren = 'logo___childClientsJson___parent___children',
  LogoChildClientsJsonParentId = 'logo___childClientsJson___parent___id',
  LogoChildClientsJsonUrl = 'logo___childClientsJson___url',
  LogoChildContentJsonChildren = 'logo___childContentJson___children',
  LogoChildContentJsonChildrenChildren = 'logo___childContentJson___children___children',
  LogoChildContentJsonChildrenId = 'logo___childContentJson___children___id',
  LogoChildContentJsonConferenceParticipationConferencesOrganized = 'logo___childContentJson___conferenceParticipation___conferencesOrganized',
  LogoChildContentJsonConferenceParticipationPanelsOrganized = 'logo___childContentJson___conferenceParticipation___panelsOrganized',
  LogoChildContentJsonConferenceParticipationPapersPresented = 'logo___childContentJson___conferenceParticipation___papersPresented',
  LogoChildContentJsonDepartmentalAndUniversityService = 'logo___childContentJson___departmentalAndUniversityService',
  LogoChildContentJsonDepartmentalAndUniversityServiceDate = 'logo___childContentJson___departmentalAndUniversityService___date',
  LogoChildContentJsonDepartmentalAndUniversityServiceTitle = 'logo___childContentJson___departmentalAndUniversityService___title',
  LogoChildContentJsonEducation = 'logo___childContentJson___education',
  LogoChildContentJsonEducationDegree = 'logo___childContentJson___education___degree',
  LogoChildContentJsonEducationSource = 'logo___childContentJson___education___source',
  LogoChildContentJsonEducationUrl = 'logo___childContentJson___education___url',
  LogoChildContentJsonEducationYear = 'logo___childContentJson___education___year',
  LogoChildContentJsonFieldsCollection = 'logo___childContentJson___fields___collection',
  LogoChildContentJsonGrantsAndFellowships = 'logo___childContentJson___grantsAndFellowships',
  LogoChildContentJsonGrantsAndFellowshipsDate = 'logo___childContentJson___grantsAndFellowships___date',
  LogoChildContentJsonGrantsAndFellowshipsTitle = 'logo___childContentJson___grantsAndFellowships___title',
  LogoChildContentJsonId = 'logo___childContentJson___id',
  LogoChildContentJsonInternalContent = 'logo___childContentJson___internal___content',
  LogoChildContentJsonInternalContentDigest = 'logo___childContentJson___internal___contentDigest',
  LogoChildContentJsonInternalDescription = 'logo___childContentJson___internal___description',
  LogoChildContentJsonInternalFieldOwners = 'logo___childContentJson___internal___fieldOwners',
  LogoChildContentJsonInternalIgnoreType = 'logo___childContentJson___internal___ignoreType',
  LogoChildContentJsonInternalMediaType = 'logo___childContentJson___internal___mediaType',
  LogoChildContentJsonInternalOwner = 'logo___childContentJson___internal___owner',
  LogoChildContentJsonInternalType = 'logo___childContentJson___internal___type',
  LogoChildContentJsonInvitedTalks = 'logo___childContentJson___invitedTalks',
  LogoChildContentJsonInvitedTalksAuthors = 'logo___childContentJson___invitedTalks___authors',
  LogoChildContentJsonInvitedTalksDate = 'logo___childContentJson___invitedTalks___date',
  LogoChildContentJsonInvitedTalksExtra = 'logo___childContentJson___invitedTalks___extra',
  LogoChildContentJsonInvitedTalksLocation = 'logo___childContentJson___invitedTalks___location',
  LogoChildContentJsonInvitedTalksTitle = 'logo___childContentJson___invitedTalks___title',
  LogoChildContentJsonInvitedTalksUrl = 'logo___childContentJson___invitedTalks___url',
  LogoChildContentJsonParentChildren = 'logo___childContentJson___parent___children',
  LogoChildContentJsonParentId = 'logo___childContentJson___parent___id',
  LogoChildContentJsonProfessionalAppointments = 'logo___childContentJson___professionalAppointments',
  LogoChildContentJsonProfessionalAppointmentsDate = 'logo___childContentJson___professionalAppointments___date',
  LogoChildContentJsonProfessionalAppointmentsTitle = 'logo___childContentJson___professionalAppointments___title',
  LogoChildContentJsonProfessionalMemberships = 'logo___childContentJson___professionalMemberships',
  LogoChildContentJsonProfessionalMembershipsDate = 'logo___childContentJson___professionalMemberships___date',
  LogoChildContentJsonProfessionalMembershipsTitle = 'logo___childContentJson___professionalMemberships___title',
  LogoChildContentJsonProfessionalMembershipsUrl = 'logo___childContentJson___professionalMemberships___url',
  LogoChildContentJsonPublicationsBookChapters = 'logo___childContentJson___publications___bookChapters',
  LogoChildContentJsonPublicationsBooks = 'logo___childContentJson___publications___books',
  LogoChildContentJsonPublicationsConferenceProceedings = 'logo___childContentJson___publications___conferenceProceedings',
  LogoChildContentJsonPublicationsEditedVolumes = 'logo___childContentJson___publications___editedVolumes',
  LogoChildContentJsonPublicationsOtherPublications = 'logo___childContentJson___publications___otherPublications',
  LogoChildContentJsonPublicationsRefereedJournalArticles = 'logo___childContentJson___publications___refereedJournalArticles',
  LogoChildContentJsonReferences = 'logo___childContentJson___references',
  LogoChildContentJsonReferencesReference = 'logo___childContentJson___references___reference',
  LogoChildContentJsonReviewingExperience = 'logo___childContentJson___reviewingExperience',
  LogoChildContentJsonReviewingExperienceDate = 'logo___childContentJson___reviewingExperience___date',
  LogoChildContentJsonReviewingExperienceTitle = 'logo___childContentJson___reviewingExperience___title',
  LogoChildContentJsonSelectedPressAndMedia = 'logo___childContentJson___selectedPressAndMedia',
  LogoChildContentJsonSelectedPressAndMediaAuthors = 'logo___childContentJson___selectedPressAndMedia___authors',
  LogoChildContentJsonSelectedPressAndMediaDate = 'logo___childContentJson___selectedPressAndMedia___date',
  LogoChildContentJsonSelectedPressAndMediaFormattedSource = 'logo___childContentJson___selectedPressAndMedia___formattedSource',
  LogoChildContentJsonSelectedPressAndMediaSource = 'logo___childContentJson___selectedPressAndMedia___source',
  LogoChildContentJsonSelectedPressAndMediaTitle = 'logo___childContentJson___selectedPressAndMedia___title',
  LogoChildContentJsonSelectedPressAndMediaUrl = 'logo___childContentJson___selectedPressAndMedia___url',
  LogoChildContentJsonServiceToProfession = 'logo___childContentJson___serviceToProfession',
  LogoChildContentJsonServiceToProfessionDate = 'logo___childContentJson___serviceToProfession___date',
  LogoChildContentJsonServiceToProfessionTitle = 'logo___childContentJson___serviceToProfession___title',
  LogoChildContentJsonTeachingAndSupervisionExperience = 'logo___childContentJson___teachingAndSupervisionExperience',
  LogoChildContentJsonTeachingAndSupervisionExperienceCourses = 'logo___childContentJson___teachingAndSupervisionExperience___courses',
  LogoChildContentJsonTeachingAndSupervisionExperienceLocation = 'logo___childContentJson___teachingAndSupervisionExperience___location',
  LogoChildImageSharpChildren = 'logo___childImageSharp___children',
  LogoChildImageSharpChildrenChildren = 'logo___childImageSharp___children___children',
  LogoChildImageSharpChildrenId = 'logo___childImageSharp___children___id',
  LogoChildImageSharpFieldsCollection = 'logo___childImageSharp___fields___collection',
  LogoChildImageSharpFixedAspectRatio = 'logo___childImageSharp___fixed___aspectRatio',
  LogoChildImageSharpFixedBase64 = 'logo___childImageSharp___fixed___base64',
  LogoChildImageSharpFixedHeight = 'logo___childImageSharp___fixed___height',
  LogoChildImageSharpFixedOriginalName = 'logo___childImageSharp___fixed___originalName',
  LogoChildImageSharpFixedSrc = 'logo___childImageSharp___fixed___src',
  LogoChildImageSharpFixedSrcSet = 'logo___childImageSharp___fixed___srcSet',
  LogoChildImageSharpFixedSrcSetWebp = 'logo___childImageSharp___fixed___srcSetWebp',
  LogoChildImageSharpFixedSrcWebp = 'logo___childImageSharp___fixed___srcWebp',
  LogoChildImageSharpFixedTracedSvg = 'logo___childImageSharp___fixed___tracedSVG',
  LogoChildImageSharpFixedWidth = 'logo___childImageSharp___fixed___width',
  LogoChildImageSharpFluidAspectRatio = 'logo___childImageSharp___fluid___aspectRatio',
  LogoChildImageSharpFluidBase64 = 'logo___childImageSharp___fluid___base64',
  LogoChildImageSharpFluidOriginalImg = 'logo___childImageSharp___fluid___originalImg',
  LogoChildImageSharpFluidOriginalName = 'logo___childImageSharp___fluid___originalName',
  LogoChildImageSharpFluidPresentationHeight = 'logo___childImageSharp___fluid___presentationHeight',
  LogoChildImageSharpFluidPresentationWidth = 'logo___childImageSharp___fluid___presentationWidth',
  LogoChildImageSharpFluidSizes = 'logo___childImageSharp___fluid___sizes',
  LogoChildImageSharpFluidSrc = 'logo___childImageSharp___fluid___src',
  LogoChildImageSharpFluidSrcSet = 'logo___childImageSharp___fluid___srcSet',
  LogoChildImageSharpFluidSrcSetWebp = 'logo___childImageSharp___fluid___srcSetWebp',
  LogoChildImageSharpFluidSrcWebp = 'logo___childImageSharp___fluid___srcWebp',
  LogoChildImageSharpFluidTracedSvg = 'logo___childImageSharp___fluid___tracedSVG',
  LogoChildImageSharpGatsbyImageData = 'logo___childImageSharp___gatsbyImageData',
  LogoChildImageSharpId = 'logo___childImageSharp___id',
  LogoChildImageSharpInternalContent = 'logo___childImageSharp___internal___content',
  LogoChildImageSharpInternalContentDigest = 'logo___childImageSharp___internal___contentDigest',
  LogoChildImageSharpInternalDescription = 'logo___childImageSharp___internal___description',
  LogoChildImageSharpInternalFieldOwners = 'logo___childImageSharp___internal___fieldOwners',
  LogoChildImageSharpInternalIgnoreType = 'logo___childImageSharp___internal___ignoreType',
  LogoChildImageSharpInternalMediaType = 'logo___childImageSharp___internal___mediaType',
  LogoChildImageSharpInternalOwner = 'logo___childImageSharp___internal___owner',
  LogoChildImageSharpInternalType = 'logo___childImageSharp___internal___type',
  LogoChildImageSharpOriginalHeight = 'logo___childImageSharp___original___height',
  LogoChildImageSharpOriginalSrc = 'logo___childImageSharp___original___src',
  LogoChildImageSharpOriginalWidth = 'logo___childImageSharp___original___width',
  LogoChildImageSharpParentChildren = 'logo___childImageSharp___parent___children',
  LogoChildImageSharpParentId = 'logo___childImageSharp___parent___id',
  LogoChildImageSharpResizeAspectRatio = 'logo___childImageSharp___resize___aspectRatio',
  LogoChildImageSharpResizeHeight = 'logo___childImageSharp___resize___height',
  LogoChildImageSharpResizeOriginalName = 'logo___childImageSharp___resize___originalName',
  LogoChildImageSharpResizeSrc = 'logo___childImageSharp___resize___src',
  LogoChildImageSharpResizeTracedSvg = 'logo___childImageSharp___resize___tracedSVG',
  LogoChildImageSharpResizeWidth = 'logo___childImageSharp___resize___width',
  LogoChildMarkdownRemarkChildren = 'logo___childMarkdownRemark___children',
  LogoChildMarkdownRemarkChildrenChildren = 'logo___childMarkdownRemark___children___children',
  LogoChildMarkdownRemarkChildrenId = 'logo___childMarkdownRemark___children___id',
  LogoChildMarkdownRemarkExcerpt = 'logo___childMarkdownRemark___excerpt',
  LogoChildMarkdownRemarkExcerptAst = 'logo___childMarkdownRemark___excerptAst',
  LogoChildMarkdownRemarkFieldsCollection = 'logo___childMarkdownRemark___fields___collection',
  LogoChildMarkdownRemarkFieldsPath = 'logo___childMarkdownRemark___fields___path',
  LogoChildMarkdownRemarkFieldsSlug = 'logo___childMarkdownRemark___fields___slug',
  LogoChildMarkdownRemarkFieldsTags = 'logo___childMarkdownRemark___fields___tags',
  LogoChildMarkdownRemarkFileAbsolutePath = 'logo___childMarkdownRemark___fileAbsolutePath',
  LogoChildMarkdownRemarkFrontmatterCategory = 'logo___childMarkdownRemark___frontmatter___category',
  LogoChildMarkdownRemarkFrontmatterDate = 'logo___childMarkdownRemark___frontmatter___date',
  LogoChildMarkdownRemarkFrontmatterIsbn10 = 'logo___childMarkdownRemark___frontmatter___isbn10',
  LogoChildMarkdownRemarkFrontmatterIsbn13 = 'logo___childMarkdownRemark___frontmatter___isbn13',
  LogoChildMarkdownRemarkFrontmatterLayout = 'logo___childMarkdownRemark___frontmatter___layout',
  LogoChildMarkdownRemarkFrontmatterReviews = 'logo___childMarkdownRemark___frontmatter___reviews',
  LogoChildMarkdownRemarkFrontmatterSubtitle = 'logo___childMarkdownRemark___frontmatter___subtitle',
  LogoChildMarkdownRemarkFrontmatterTags = 'logo___childMarkdownRemark___frontmatter___tags',
  LogoChildMarkdownRemarkFrontmatterTitle = 'logo___childMarkdownRemark___frontmatter___title',
  LogoChildMarkdownRemarkHeadings = 'logo___childMarkdownRemark___headings',
  LogoChildMarkdownRemarkHeadingsDepth = 'logo___childMarkdownRemark___headings___depth',
  LogoChildMarkdownRemarkHeadingsId = 'logo___childMarkdownRemark___headings___id',
  LogoChildMarkdownRemarkHeadingsValue = 'logo___childMarkdownRemark___headings___value',
  LogoChildMarkdownRemarkHtml = 'logo___childMarkdownRemark___html',
  LogoChildMarkdownRemarkHtmlAst = 'logo___childMarkdownRemark___htmlAst',
  LogoChildMarkdownRemarkId = 'logo___childMarkdownRemark___id',
  LogoChildMarkdownRemarkInternalContent = 'logo___childMarkdownRemark___internal___content',
  LogoChildMarkdownRemarkInternalContentDigest = 'logo___childMarkdownRemark___internal___contentDigest',
  LogoChildMarkdownRemarkInternalDescription = 'logo___childMarkdownRemark___internal___description',
  LogoChildMarkdownRemarkInternalFieldOwners = 'logo___childMarkdownRemark___internal___fieldOwners',
  LogoChildMarkdownRemarkInternalIgnoreType = 'logo___childMarkdownRemark___internal___ignoreType',
  LogoChildMarkdownRemarkInternalMediaType = 'logo___childMarkdownRemark___internal___mediaType',
  LogoChildMarkdownRemarkInternalOwner = 'logo___childMarkdownRemark___internal___owner',
  LogoChildMarkdownRemarkInternalType = 'logo___childMarkdownRemark___internal___type',
  LogoChildMarkdownRemarkParentChildren = 'logo___childMarkdownRemark___parent___children',
  LogoChildMarkdownRemarkParentId = 'logo___childMarkdownRemark___parent___id',
  LogoChildMarkdownRemarkRawMarkdownBody = 'logo___childMarkdownRemark___rawMarkdownBody',
  LogoChildMarkdownRemarkTableOfContents = 'logo___childMarkdownRemark___tableOfContents',
  LogoChildMarkdownRemarkTimeToRead = 'logo___childMarkdownRemark___timeToRead',
  LogoChildMarkdownRemarkWordCountParagraphs = 'logo___childMarkdownRemark___wordCount___paragraphs',
  LogoChildMarkdownRemarkWordCountSentences = 'logo___childMarkdownRemark___wordCount___sentences',
  LogoChildMarkdownRemarkWordCountWords = 'logo___childMarkdownRemark___wordCount___words',
  LogoChildMdxBody = 'logo___childMdx___body',
  LogoChildMdxChildren = 'logo___childMdx___children',
  LogoChildMdxChildrenChildren = 'logo___childMdx___children___children',
  LogoChildMdxChildrenId = 'logo___childMdx___children___id',
  LogoChildMdxExcerpt = 'logo___childMdx___excerpt',
  LogoChildMdxFieldsCollection = 'logo___childMdx___fields___collection',
  LogoChildMdxFieldsSlug = 'logo___childMdx___fields___slug',
  LogoChildMdxFileAbsolutePath = 'logo___childMdx___fileAbsolutePath',
  LogoChildMdxFrontmatterTitle = 'logo___childMdx___frontmatter___title',
  LogoChildMdxHeadings = 'logo___childMdx___headings',
  LogoChildMdxHeadingsDepth = 'logo___childMdx___headings___depth',
  LogoChildMdxHeadingsValue = 'logo___childMdx___headings___value',
  LogoChildMdxHtml = 'logo___childMdx___html',
  LogoChildMdxId = 'logo___childMdx___id',
  LogoChildMdxInternalContent = 'logo___childMdx___internal___content',
  LogoChildMdxInternalContentDigest = 'logo___childMdx___internal___contentDigest',
  LogoChildMdxInternalDescription = 'logo___childMdx___internal___description',
  LogoChildMdxInternalFieldOwners = 'logo___childMdx___internal___fieldOwners',
  LogoChildMdxInternalIgnoreType = 'logo___childMdx___internal___ignoreType',
  LogoChildMdxInternalMediaType = 'logo___childMdx___internal___mediaType',
  LogoChildMdxInternalOwner = 'logo___childMdx___internal___owner',
  LogoChildMdxInternalType = 'logo___childMdx___internal___type',
  LogoChildMdxMdxAst = 'logo___childMdx___mdxAST',
  LogoChildMdxParentChildren = 'logo___childMdx___parent___children',
  LogoChildMdxParentId = 'logo___childMdx___parent___id',
  LogoChildMdxRawBody = 'logo___childMdx___rawBody',
  LogoChildMdxSlug = 'logo___childMdx___slug',
  LogoChildMdxTableOfContents = 'logo___childMdx___tableOfContents',
  LogoChildMdxTimeToRead = 'logo___childMdx___timeToRead',
  LogoChildMdxWordCountParagraphs = 'logo___childMdx___wordCount___paragraphs',
  LogoChildMdxWordCountSentences = 'logo___childMdx___wordCount___sentences',
  LogoChildMdxWordCountWords = 'logo___childMdx___wordCount___words',
  LogoChildMediaJsonChildren = 'logo___childMediaJson___children',
  LogoChildMediaJsonChildrenChildren = 'logo___childMediaJson___children___children',
  LogoChildMediaJsonChildrenId = 'logo___childMediaJson___children___id',
  LogoChildMediaJsonFieldsCollection = 'logo___childMediaJson___fields___collection',
  LogoChildMediaJsonId = 'logo___childMediaJson___id',
  LogoChildMediaJsonInternalContent = 'logo___childMediaJson___internal___content',
  LogoChildMediaJsonInternalContentDigest = 'logo___childMediaJson___internal___contentDigest',
  LogoChildMediaJsonInternalDescription = 'logo___childMediaJson___internal___description',
  LogoChildMediaJsonInternalFieldOwners = 'logo___childMediaJson___internal___fieldOwners',
  LogoChildMediaJsonInternalIgnoreType = 'logo___childMediaJson___internal___ignoreType',
  LogoChildMediaJsonInternalMediaType = 'logo___childMediaJson___internal___mediaType',
  LogoChildMediaJsonInternalOwner = 'logo___childMediaJson___internal___owner',
  LogoChildMediaJsonInternalType = 'logo___childMediaJson___internal___type',
  LogoChildMediaJsonLogoAbsolutePath = 'logo___childMediaJson___logo___absolutePath',
  LogoChildMediaJsonLogoAccessTime = 'logo___childMediaJson___logo___accessTime',
  LogoChildMediaJsonLogoAtime = 'logo___childMediaJson___logo___atime',
  LogoChildMediaJsonLogoAtimeMs = 'logo___childMediaJson___logo___atimeMs',
  LogoChildMediaJsonLogoBase = 'logo___childMediaJson___logo___base',
  LogoChildMediaJsonLogoBirthTime = 'logo___childMediaJson___logo___birthTime',
  LogoChildMediaJsonLogoBirthtime = 'logo___childMediaJson___logo___birthtime',
  LogoChildMediaJsonLogoBirthtimeMs = 'logo___childMediaJson___logo___birthtimeMs',
  LogoChildMediaJsonLogoBlksize = 'logo___childMediaJson___logo___blksize',
  LogoChildMediaJsonLogoBlocks = 'logo___childMediaJson___logo___blocks',
  LogoChildMediaJsonLogoChangeTime = 'logo___childMediaJson___logo___changeTime',
  LogoChildMediaJsonLogoChildren = 'logo___childMediaJson___logo___children',
  LogoChildMediaJsonLogoChildrenAudioJson = 'logo___childMediaJson___logo___childrenAudioJson',
  LogoChildMediaJsonLogoChildrenClientsJson = 'logo___childMediaJson___logo___childrenClientsJson',
  LogoChildMediaJsonLogoChildrenContentJson = 'logo___childMediaJson___logo___childrenContentJson',
  LogoChildMediaJsonLogoChildrenImageSharp = 'logo___childMediaJson___logo___childrenImageSharp',
  LogoChildMediaJsonLogoChildrenMarkdownRemark = 'logo___childMediaJson___logo___childrenMarkdownRemark',
  LogoChildMediaJsonLogoChildrenMdx = 'logo___childMediaJson___logo___childrenMdx',
  LogoChildMediaJsonLogoChildrenMediaJson = 'logo___childMediaJson___logo___childrenMediaJson',
  LogoChildMediaJsonLogoChildrenPrintJson = 'logo___childMediaJson___logo___childrenPrintJson',
  LogoChildMediaJsonLogoChildrenVideoJson = 'logo___childMediaJson___logo___childrenVideoJson',
  LogoChildMediaJsonLogoCtime = 'logo___childMediaJson___logo___ctime',
  LogoChildMediaJsonLogoCtimeMs = 'logo___childMediaJson___logo___ctimeMs',
  LogoChildMediaJsonLogoDev = 'logo___childMediaJson___logo___dev',
  LogoChildMediaJsonLogoDir = 'logo___childMediaJson___logo___dir',
  LogoChildMediaJsonLogoExt = 'logo___childMediaJson___logo___ext',
  LogoChildMediaJsonLogoExtension = 'logo___childMediaJson___logo___extension',
  LogoChildMediaJsonLogoGid = 'logo___childMediaJson___logo___gid',
  LogoChildMediaJsonLogoId = 'logo___childMediaJson___logo___id',
  LogoChildMediaJsonLogoIno = 'logo___childMediaJson___logo___ino',
  LogoChildMediaJsonLogoMode = 'logo___childMediaJson___logo___mode',
  LogoChildMediaJsonLogoModifiedTime = 'logo___childMediaJson___logo___modifiedTime',
  LogoChildMediaJsonLogoMtime = 'logo___childMediaJson___logo___mtime',
  LogoChildMediaJsonLogoMtimeMs = 'logo___childMediaJson___logo___mtimeMs',
  LogoChildMediaJsonLogoName = 'logo___childMediaJson___logo___name',
  LogoChildMediaJsonLogoNlink = 'logo___childMediaJson___logo___nlink',
  LogoChildMediaJsonLogoPrettySize = 'logo___childMediaJson___logo___prettySize',
  LogoChildMediaJsonLogoPublicUrl = 'logo___childMediaJson___logo___publicURL',
  LogoChildMediaJsonLogoRdev = 'logo___childMediaJson___logo___rdev',
  LogoChildMediaJsonLogoRelativeDirectory = 'logo___childMediaJson___logo___relativeDirectory',
  LogoChildMediaJsonLogoRelativePath = 'logo___childMediaJson___logo___relativePath',
  LogoChildMediaJsonLogoRoot = 'logo___childMediaJson___logo___root',
  LogoChildMediaJsonLogoSize = 'logo___childMediaJson___logo___size',
  LogoChildMediaJsonLogoSourceInstanceName = 'logo___childMediaJson___logo___sourceInstanceName',
  LogoChildMediaJsonLogoUid = 'logo___childMediaJson___logo___uid',
  LogoChildMediaJsonName = 'logo___childMediaJson___name',
  LogoChildMediaJsonParentChildren = 'logo___childMediaJson___parent___children',
  LogoChildMediaJsonParentId = 'logo___childMediaJson___parent___id',
  LogoChildMediaJsonUrl = 'logo___childMediaJson___url',
  LogoChildPrintJsonChildren = 'logo___childPrintJson___children',
  LogoChildPrintJsonChildrenChildren = 'logo___childPrintJson___children___children',
  LogoChildPrintJsonChildrenId = 'logo___childPrintJson___children___id',
  LogoChildPrintJsonFieldsCollection = 'logo___childPrintJson___fields___collection',
  LogoChildPrintJsonId = 'logo___childPrintJson___id',
  LogoChildPrintJsonInternalContent = 'logo___childPrintJson___internal___content',
  LogoChildPrintJsonInternalContentDigest = 'logo___childPrintJson___internal___contentDigest',
  LogoChildPrintJsonInternalDescription = 'logo___childPrintJson___internal___description',
  LogoChildPrintJsonInternalFieldOwners = 'logo___childPrintJson___internal___fieldOwners',
  LogoChildPrintJsonInternalIgnoreType = 'logo___childPrintJson___internal___ignoreType',
  LogoChildPrintJsonInternalMediaType = 'logo___childPrintJson___internal___mediaType',
  LogoChildPrintJsonInternalOwner = 'logo___childPrintJson___internal___owner',
  LogoChildPrintJsonInternalType = 'logo___childPrintJson___internal___type',
  LogoChildPrintJsonParentChildren = 'logo___childPrintJson___parent___children',
  LogoChildPrintJsonParentId = 'logo___childPrintJson___parent___id',
  LogoChildPrintJsonSource = 'logo___childPrintJson___source',
  LogoChildPrintJsonThumbnail = 'logo___childPrintJson___thumbnail',
  LogoChildPrintJsonTitle = 'logo___childPrintJson___title',
  LogoChildPrintJsonUrl = 'logo___childPrintJson___url',
  LogoChildVideoJsonChildren = 'logo___childVideoJson___children',
  LogoChildVideoJsonChildrenChildren = 'logo___childVideoJson___children___children',
  LogoChildVideoJsonChildrenId = 'logo___childVideoJson___children___id',
  LogoChildVideoJsonFieldsCollection = 'logo___childVideoJson___fields___collection',
  LogoChildVideoJsonId = 'logo___childVideoJson___id',
  LogoChildVideoJsonInternalContent = 'logo___childVideoJson___internal___content',
  LogoChildVideoJsonInternalContentDigest = 'logo___childVideoJson___internal___contentDigest',
  LogoChildVideoJsonInternalDescription = 'logo___childVideoJson___internal___description',
  LogoChildVideoJsonInternalFieldOwners = 'logo___childVideoJson___internal___fieldOwners',
  LogoChildVideoJsonInternalIgnoreType = 'logo___childVideoJson___internal___ignoreType',
  LogoChildVideoJsonInternalMediaType = 'logo___childVideoJson___internal___mediaType',
  LogoChildVideoJsonInternalOwner = 'logo___childVideoJson___internal___owner',
  LogoChildVideoJsonInternalType = 'logo___childVideoJson___internal___type',
  LogoChildVideoJsonParentChildren = 'logo___childVideoJson___parent___children',
  LogoChildVideoJsonParentId = 'logo___childVideoJson___parent___id',
  LogoChildVideoJsonSource = 'logo___childVideoJson___source',
  LogoChildVideoJsonTitle = 'logo___childVideoJson___title',
  LogoChildVideoJsonUrl = 'logo___childVideoJson___url',
  LogoChildren = 'logo___children',
  LogoChildrenAudioJson = 'logo___childrenAudioJson',
  LogoChildrenAudioJsonChildren = 'logo___childrenAudioJson___children',
  LogoChildrenAudioJsonChildrenChildren = 'logo___childrenAudioJson___children___children',
  LogoChildrenAudioJsonChildrenId = 'logo___childrenAudioJson___children___id',
  LogoChildrenAudioJsonFieldsCollection = 'logo___childrenAudioJson___fields___collection',
  LogoChildrenAudioJsonId = 'logo___childrenAudioJson___id',
  LogoChildrenAudioJsonInternalContent = 'logo___childrenAudioJson___internal___content',
  LogoChildrenAudioJsonInternalContentDigest = 'logo___childrenAudioJson___internal___contentDigest',
  LogoChildrenAudioJsonInternalDescription = 'logo___childrenAudioJson___internal___description',
  LogoChildrenAudioJsonInternalFieldOwners = 'logo___childrenAudioJson___internal___fieldOwners',
  LogoChildrenAudioJsonInternalIgnoreType = 'logo___childrenAudioJson___internal___ignoreType',
  LogoChildrenAudioJsonInternalMediaType = 'logo___childrenAudioJson___internal___mediaType',
  LogoChildrenAudioJsonInternalOwner = 'logo___childrenAudioJson___internal___owner',
  LogoChildrenAudioJsonInternalType = 'logo___childrenAudioJson___internal___type',
  LogoChildrenAudioJsonParentChildren = 'logo___childrenAudioJson___parent___children',
  LogoChildrenAudioJsonParentId = 'logo___childrenAudioJson___parent___id',
  LogoChildrenAudioJsonSource = 'logo___childrenAudioJson___source',
  LogoChildrenAudioJsonTitle = 'logo___childrenAudioJson___title',
  LogoChildrenAudioJsonUrl = 'logo___childrenAudioJson___url',
  LogoChildrenClientsJson = 'logo___childrenClientsJson',
  LogoChildrenClientsJsonChildren = 'logo___childrenClientsJson___children',
  LogoChildrenClientsJsonChildrenChildren = 'logo___childrenClientsJson___children___children',
  LogoChildrenClientsJsonChildrenId = 'logo___childrenClientsJson___children___id',
  LogoChildrenClientsJsonFieldsCollection = 'logo___childrenClientsJson___fields___collection',
  LogoChildrenClientsJsonId = 'logo___childrenClientsJson___id',
  LogoChildrenClientsJsonInternalContent = 'logo___childrenClientsJson___internal___content',
  LogoChildrenClientsJsonInternalContentDigest = 'logo___childrenClientsJson___internal___contentDigest',
  LogoChildrenClientsJsonInternalDescription = 'logo___childrenClientsJson___internal___description',
  LogoChildrenClientsJsonInternalFieldOwners = 'logo___childrenClientsJson___internal___fieldOwners',
  LogoChildrenClientsJsonInternalIgnoreType = 'logo___childrenClientsJson___internal___ignoreType',
  LogoChildrenClientsJsonInternalMediaType = 'logo___childrenClientsJson___internal___mediaType',
  LogoChildrenClientsJsonInternalOwner = 'logo___childrenClientsJson___internal___owner',
  LogoChildrenClientsJsonInternalType = 'logo___childrenClientsJson___internal___type',
  LogoChildrenClientsJsonLogoAbsolutePath = 'logo___childrenClientsJson___logo___absolutePath',
  LogoChildrenClientsJsonLogoAccessTime = 'logo___childrenClientsJson___logo___accessTime',
  LogoChildrenClientsJsonLogoAtime = 'logo___childrenClientsJson___logo___atime',
  LogoChildrenClientsJsonLogoAtimeMs = 'logo___childrenClientsJson___logo___atimeMs',
  LogoChildrenClientsJsonLogoBase = 'logo___childrenClientsJson___logo___base',
  LogoChildrenClientsJsonLogoBirthTime = 'logo___childrenClientsJson___logo___birthTime',
  LogoChildrenClientsJsonLogoBirthtime = 'logo___childrenClientsJson___logo___birthtime',
  LogoChildrenClientsJsonLogoBirthtimeMs = 'logo___childrenClientsJson___logo___birthtimeMs',
  LogoChildrenClientsJsonLogoBlksize = 'logo___childrenClientsJson___logo___blksize',
  LogoChildrenClientsJsonLogoBlocks = 'logo___childrenClientsJson___logo___blocks',
  LogoChildrenClientsJsonLogoChangeTime = 'logo___childrenClientsJson___logo___changeTime',
  LogoChildrenClientsJsonLogoChildren = 'logo___childrenClientsJson___logo___children',
  LogoChildrenClientsJsonLogoChildrenAudioJson = 'logo___childrenClientsJson___logo___childrenAudioJson',
  LogoChildrenClientsJsonLogoChildrenClientsJson = 'logo___childrenClientsJson___logo___childrenClientsJson',
  LogoChildrenClientsJsonLogoChildrenContentJson = 'logo___childrenClientsJson___logo___childrenContentJson',
  LogoChildrenClientsJsonLogoChildrenImageSharp = 'logo___childrenClientsJson___logo___childrenImageSharp',
  LogoChildrenClientsJsonLogoChildrenMarkdownRemark = 'logo___childrenClientsJson___logo___childrenMarkdownRemark',
  LogoChildrenClientsJsonLogoChildrenMdx = 'logo___childrenClientsJson___logo___childrenMdx',
  LogoChildrenClientsJsonLogoChildrenMediaJson = 'logo___childrenClientsJson___logo___childrenMediaJson',
  LogoChildrenClientsJsonLogoChildrenPrintJson = 'logo___childrenClientsJson___logo___childrenPrintJson',
  LogoChildrenClientsJsonLogoChildrenVideoJson = 'logo___childrenClientsJson___logo___childrenVideoJson',
  LogoChildrenClientsJsonLogoCtime = 'logo___childrenClientsJson___logo___ctime',
  LogoChildrenClientsJsonLogoCtimeMs = 'logo___childrenClientsJson___logo___ctimeMs',
  LogoChildrenClientsJsonLogoDev = 'logo___childrenClientsJson___logo___dev',
  LogoChildrenClientsJsonLogoDir = 'logo___childrenClientsJson___logo___dir',
  LogoChildrenClientsJsonLogoExt = 'logo___childrenClientsJson___logo___ext',
  LogoChildrenClientsJsonLogoExtension = 'logo___childrenClientsJson___logo___extension',
  LogoChildrenClientsJsonLogoGid = 'logo___childrenClientsJson___logo___gid',
  LogoChildrenClientsJsonLogoId = 'logo___childrenClientsJson___logo___id',
  LogoChildrenClientsJsonLogoIno = 'logo___childrenClientsJson___logo___ino',
  LogoChildrenClientsJsonLogoMode = 'logo___childrenClientsJson___logo___mode',
  LogoChildrenClientsJsonLogoModifiedTime = 'logo___childrenClientsJson___logo___modifiedTime',
  LogoChildrenClientsJsonLogoMtime = 'logo___childrenClientsJson___logo___mtime',
  LogoChildrenClientsJsonLogoMtimeMs = 'logo___childrenClientsJson___logo___mtimeMs',
  LogoChildrenClientsJsonLogoName = 'logo___childrenClientsJson___logo___name',
  LogoChildrenClientsJsonLogoNlink = 'logo___childrenClientsJson___logo___nlink',
  LogoChildrenClientsJsonLogoPrettySize = 'logo___childrenClientsJson___logo___prettySize',
  LogoChildrenClientsJsonLogoPublicUrl = 'logo___childrenClientsJson___logo___publicURL',
  LogoChildrenClientsJsonLogoRdev = 'logo___childrenClientsJson___logo___rdev',
  LogoChildrenClientsJsonLogoRelativeDirectory = 'logo___childrenClientsJson___logo___relativeDirectory',
  LogoChildrenClientsJsonLogoRelativePath = 'logo___childrenClientsJson___logo___relativePath',
  LogoChildrenClientsJsonLogoRoot = 'logo___childrenClientsJson___logo___root',
  LogoChildrenClientsJsonLogoSize = 'logo___childrenClientsJson___logo___size',
  LogoChildrenClientsJsonLogoSourceInstanceName = 'logo___childrenClientsJson___logo___sourceInstanceName',
  LogoChildrenClientsJsonLogoUid = 'logo___childrenClientsJson___logo___uid',
  LogoChildrenClientsJsonName = 'logo___childrenClientsJson___name',
  LogoChildrenClientsJsonParentChildren = 'logo___childrenClientsJson___parent___children',
  LogoChildrenClientsJsonParentId = 'logo___childrenClientsJson___parent___id',
  LogoChildrenClientsJsonUrl = 'logo___childrenClientsJson___url',
  LogoChildrenContentJson = 'logo___childrenContentJson',
  LogoChildrenContentJsonChildren = 'logo___childrenContentJson___children',
  LogoChildrenContentJsonChildrenChildren = 'logo___childrenContentJson___children___children',
  LogoChildrenContentJsonChildrenId = 'logo___childrenContentJson___children___id',
  LogoChildrenContentJsonConferenceParticipationConferencesOrganized = 'logo___childrenContentJson___conferenceParticipation___conferencesOrganized',
  LogoChildrenContentJsonConferenceParticipationPanelsOrganized = 'logo___childrenContentJson___conferenceParticipation___panelsOrganized',
  LogoChildrenContentJsonConferenceParticipationPapersPresented = 'logo___childrenContentJson___conferenceParticipation___papersPresented',
  LogoChildrenContentJsonDepartmentalAndUniversityService = 'logo___childrenContentJson___departmentalAndUniversityService',
  LogoChildrenContentJsonDepartmentalAndUniversityServiceDate = 'logo___childrenContentJson___departmentalAndUniversityService___date',
  LogoChildrenContentJsonDepartmentalAndUniversityServiceTitle = 'logo___childrenContentJson___departmentalAndUniversityService___title',
  LogoChildrenContentJsonEducation = 'logo___childrenContentJson___education',
  LogoChildrenContentJsonEducationDegree = 'logo___childrenContentJson___education___degree',
  LogoChildrenContentJsonEducationSource = 'logo___childrenContentJson___education___source',
  LogoChildrenContentJsonEducationUrl = 'logo___childrenContentJson___education___url',
  LogoChildrenContentJsonEducationYear = 'logo___childrenContentJson___education___year',
  LogoChildrenContentJsonFieldsCollection = 'logo___childrenContentJson___fields___collection',
  LogoChildrenContentJsonGrantsAndFellowships = 'logo___childrenContentJson___grantsAndFellowships',
  LogoChildrenContentJsonGrantsAndFellowshipsDate = 'logo___childrenContentJson___grantsAndFellowships___date',
  LogoChildrenContentJsonGrantsAndFellowshipsTitle = 'logo___childrenContentJson___grantsAndFellowships___title',
  LogoChildrenContentJsonId = 'logo___childrenContentJson___id',
  LogoChildrenContentJsonInternalContent = 'logo___childrenContentJson___internal___content',
  LogoChildrenContentJsonInternalContentDigest = 'logo___childrenContentJson___internal___contentDigest',
  LogoChildrenContentJsonInternalDescription = 'logo___childrenContentJson___internal___description',
  LogoChildrenContentJsonInternalFieldOwners = 'logo___childrenContentJson___internal___fieldOwners',
  LogoChildrenContentJsonInternalIgnoreType = 'logo___childrenContentJson___internal___ignoreType',
  LogoChildrenContentJsonInternalMediaType = 'logo___childrenContentJson___internal___mediaType',
  LogoChildrenContentJsonInternalOwner = 'logo___childrenContentJson___internal___owner',
  LogoChildrenContentJsonInternalType = 'logo___childrenContentJson___internal___type',
  LogoChildrenContentJsonInvitedTalks = 'logo___childrenContentJson___invitedTalks',
  LogoChildrenContentJsonInvitedTalksAuthors = 'logo___childrenContentJson___invitedTalks___authors',
  LogoChildrenContentJsonInvitedTalksDate = 'logo___childrenContentJson___invitedTalks___date',
  LogoChildrenContentJsonInvitedTalksExtra = 'logo___childrenContentJson___invitedTalks___extra',
  LogoChildrenContentJsonInvitedTalksLocation = 'logo___childrenContentJson___invitedTalks___location',
  LogoChildrenContentJsonInvitedTalksTitle = 'logo___childrenContentJson___invitedTalks___title',
  LogoChildrenContentJsonInvitedTalksUrl = 'logo___childrenContentJson___invitedTalks___url',
  LogoChildrenContentJsonParentChildren = 'logo___childrenContentJson___parent___children',
  LogoChildrenContentJsonParentId = 'logo___childrenContentJson___parent___id',
  LogoChildrenContentJsonProfessionalAppointments = 'logo___childrenContentJson___professionalAppointments',
  LogoChildrenContentJsonProfessionalAppointmentsDate = 'logo___childrenContentJson___professionalAppointments___date',
  LogoChildrenContentJsonProfessionalAppointmentsTitle = 'logo___childrenContentJson___professionalAppointments___title',
  LogoChildrenContentJsonProfessionalMemberships = 'logo___childrenContentJson___professionalMemberships',
  LogoChildrenContentJsonProfessionalMembershipsDate = 'logo___childrenContentJson___professionalMemberships___date',
  LogoChildrenContentJsonProfessionalMembershipsTitle = 'logo___childrenContentJson___professionalMemberships___title',
  LogoChildrenContentJsonProfessionalMembershipsUrl = 'logo___childrenContentJson___professionalMemberships___url',
  LogoChildrenContentJsonPublicationsBookChapters = 'logo___childrenContentJson___publications___bookChapters',
  LogoChildrenContentJsonPublicationsBooks = 'logo___childrenContentJson___publications___books',
  LogoChildrenContentJsonPublicationsConferenceProceedings = 'logo___childrenContentJson___publications___conferenceProceedings',
  LogoChildrenContentJsonPublicationsEditedVolumes = 'logo___childrenContentJson___publications___editedVolumes',
  LogoChildrenContentJsonPublicationsOtherPublications = 'logo___childrenContentJson___publications___otherPublications',
  LogoChildrenContentJsonPublicationsRefereedJournalArticles = 'logo___childrenContentJson___publications___refereedJournalArticles',
  LogoChildrenContentJsonReferences = 'logo___childrenContentJson___references',
  LogoChildrenContentJsonReferencesReference = 'logo___childrenContentJson___references___reference',
  LogoChildrenContentJsonReviewingExperience = 'logo___childrenContentJson___reviewingExperience',
  LogoChildrenContentJsonReviewingExperienceDate = 'logo___childrenContentJson___reviewingExperience___date',
  LogoChildrenContentJsonReviewingExperienceTitle = 'logo___childrenContentJson___reviewingExperience___title',
  LogoChildrenContentJsonSelectedPressAndMedia = 'logo___childrenContentJson___selectedPressAndMedia',
  LogoChildrenContentJsonSelectedPressAndMediaAuthors = 'logo___childrenContentJson___selectedPressAndMedia___authors',
  LogoChildrenContentJsonSelectedPressAndMediaDate = 'logo___childrenContentJson___selectedPressAndMedia___date',
  LogoChildrenContentJsonSelectedPressAndMediaFormattedSource = 'logo___childrenContentJson___selectedPressAndMedia___formattedSource',
  LogoChildrenContentJsonSelectedPressAndMediaSource = 'logo___childrenContentJson___selectedPressAndMedia___source',
  LogoChildrenContentJsonSelectedPressAndMediaTitle = 'logo___childrenContentJson___selectedPressAndMedia___title',
  LogoChildrenContentJsonSelectedPressAndMediaUrl = 'logo___childrenContentJson___selectedPressAndMedia___url',
  LogoChildrenContentJsonServiceToProfession = 'logo___childrenContentJson___serviceToProfession',
  LogoChildrenContentJsonServiceToProfessionDate = 'logo___childrenContentJson___serviceToProfession___date',
  LogoChildrenContentJsonServiceToProfessionTitle = 'logo___childrenContentJson___serviceToProfession___title',
  LogoChildrenContentJsonTeachingAndSupervisionExperience = 'logo___childrenContentJson___teachingAndSupervisionExperience',
  LogoChildrenContentJsonTeachingAndSupervisionExperienceCourses = 'logo___childrenContentJson___teachingAndSupervisionExperience___courses',
  LogoChildrenContentJsonTeachingAndSupervisionExperienceLocation = 'logo___childrenContentJson___teachingAndSupervisionExperience___location',
  LogoChildrenImageSharp = 'logo___childrenImageSharp',
  LogoChildrenImageSharpChildren = 'logo___childrenImageSharp___children',
  LogoChildrenImageSharpChildrenChildren = 'logo___childrenImageSharp___children___children',
  LogoChildrenImageSharpChildrenId = 'logo___childrenImageSharp___children___id',
  LogoChildrenImageSharpFieldsCollection = 'logo___childrenImageSharp___fields___collection',
  LogoChildrenImageSharpFixedAspectRatio = 'logo___childrenImageSharp___fixed___aspectRatio',
  LogoChildrenImageSharpFixedBase64 = 'logo___childrenImageSharp___fixed___base64',
  LogoChildrenImageSharpFixedHeight = 'logo___childrenImageSharp___fixed___height',
  LogoChildrenImageSharpFixedOriginalName = 'logo___childrenImageSharp___fixed___originalName',
  LogoChildrenImageSharpFixedSrc = 'logo___childrenImageSharp___fixed___src',
  LogoChildrenImageSharpFixedSrcSet = 'logo___childrenImageSharp___fixed___srcSet',
  LogoChildrenImageSharpFixedSrcSetWebp = 'logo___childrenImageSharp___fixed___srcSetWebp',
  LogoChildrenImageSharpFixedSrcWebp = 'logo___childrenImageSharp___fixed___srcWebp',
  LogoChildrenImageSharpFixedTracedSvg = 'logo___childrenImageSharp___fixed___tracedSVG',
  LogoChildrenImageSharpFixedWidth = 'logo___childrenImageSharp___fixed___width',
  LogoChildrenImageSharpFluidAspectRatio = 'logo___childrenImageSharp___fluid___aspectRatio',
  LogoChildrenImageSharpFluidBase64 = 'logo___childrenImageSharp___fluid___base64',
  LogoChildrenImageSharpFluidOriginalImg = 'logo___childrenImageSharp___fluid___originalImg',
  LogoChildrenImageSharpFluidOriginalName = 'logo___childrenImageSharp___fluid___originalName',
  LogoChildrenImageSharpFluidPresentationHeight = 'logo___childrenImageSharp___fluid___presentationHeight',
  LogoChildrenImageSharpFluidPresentationWidth = 'logo___childrenImageSharp___fluid___presentationWidth',
  LogoChildrenImageSharpFluidSizes = 'logo___childrenImageSharp___fluid___sizes',
  LogoChildrenImageSharpFluidSrc = 'logo___childrenImageSharp___fluid___src',
  LogoChildrenImageSharpFluidSrcSet = 'logo___childrenImageSharp___fluid___srcSet',
  LogoChildrenImageSharpFluidSrcSetWebp = 'logo___childrenImageSharp___fluid___srcSetWebp',
  LogoChildrenImageSharpFluidSrcWebp = 'logo___childrenImageSharp___fluid___srcWebp',
  LogoChildrenImageSharpFluidTracedSvg = 'logo___childrenImageSharp___fluid___tracedSVG',
  LogoChildrenImageSharpGatsbyImageData = 'logo___childrenImageSharp___gatsbyImageData',
  LogoChildrenImageSharpId = 'logo___childrenImageSharp___id',
  LogoChildrenImageSharpInternalContent = 'logo___childrenImageSharp___internal___content',
  LogoChildrenImageSharpInternalContentDigest = 'logo___childrenImageSharp___internal___contentDigest',
  LogoChildrenImageSharpInternalDescription = 'logo___childrenImageSharp___internal___description',
  LogoChildrenImageSharpInternalFieldOwners = 'logo___childrenImageSharp___internal___fieldOwners',
  LogoChildrenImageSharpInternalIgnoreType = 'logo___childrenImageSharp___internal___ignoreType',
  LogoChildrenImageSharpInternalMediaType = 'logo___childrenImageSharp___internal___mediaType',
  LogoChildrenImageSharpInternalOwner = 'logo___childrenImageSharp___internal___owner',
  LogoChildrenImageSharpInternalType = 'logo___childrenImageSharp___internal___type',
  LogoChildrenImageSharpOriginalHeight = 'logo___childrenImageSharp___original___height',
  LogoChildrenImageSharpOriginalSrc = 'logo___childrenImageSharp___original___src',
  LogoChildrenImageSharpOriginalWidth = 'logo___childrenImageSharp___original___width',
  LogoChildrenImageSharpParentChildren = 'logo___childrenImageSharp___parent___children',
  LogoChildrenImageSharpParentId = 'logo___childrenImageSharp___parent___id',
  LogoChildrenImageSharpResizeAspectRatio = 'logo___childrenImageSharp___resize___aspectRatio',
  LogoChildrenImageSharpResizeHeight = 'logo___childrenImageSharp___resize___height',
  LogoChildrenImageSharpResizeOriginalName = 'logo___childrenImageSharp___resize___originalName',
  LogoChildrenImageSharpResizeSrc = 'logo___childrenImageSharp___resize___src',
  LogoChildrenImageSharpResizeTracedSvg = 'logo___childrenImageSharp___resize___tracedSVG',
  LogoChildrenImageSharpResizeWidth = 'logo___childrenImageSharp___resize___width',
  LogoChildrenMarkdownRemark = 'logo___childrenMarkdownRemark',
  LogoChildrenMarkdownRemarkChildren = 'logo___childrenMarkdownRemark___children',
  LogoChildrenMarkdownRemarkChildrenChildren = 'logo___childrenMarkdownRemark___children___children',
  LogoChildrenMarkdownRemarkChildrenId = 'logo___childrenMarkdownRemark___children___id',
  LogoChildrenMarkdownRemarkExcerpt = 'logo___childrenMarkdownRemark___excerpt',
  LogoChildrenMarkdownRemarkExcerptAst = 'logo___childrenMarkdownRemark___excerptAst',
  LogoChildrenMarkdownRemarkFieldsCollection = 'logo___childrenMarkdownRemark___fields___collection',
  LogoChildrenMarkdownRemarkFieldsPath = 'logo___childrenMarkdownRemark___fields___path',
  LogoChildrenMarkdownRemarkFieldsSlug = 'logo___childrenMarkdownRemark___fields___slug',
  LogoChildrenMarkdownRemarkFieldsTags = 'logo___childrenMarkdownRemark___fields___tags',
  LogoChildrenMarkdownRemarkFileAbsolutePath = 'logo___childrenMarkdownRemark___fileAbsolutePath',
  LogoChildrenMarkdownRemarkFrontmatterCategory = 'logo___childrenMarkdownRemark___frontmatter___category',
  LogoChildrenMarkdownRemarkFrontmatterDate = 'logo___childrenMarkdownRemark___frontmatter___date',
  LogoChildrenMarkdownRemarkFrontmatterIsbn10 = 'logo___childrenMarkdownRemark___frontmatter___isbn10',
  LogoChildrenMarkdownRemarkFrontmatterIsbn13 = 'logo___childrenMarkdownRemark___frontmatter___isbn13',
  LogoChildrenMarkdownRemarkFrontmatterLayout = 'logo___childrenMarkdownRemark___frontmatter___layout',
  LogoChildrenMarkdownRemarkFrontmatterReviews = 'logo___childrenMarkdownRemark___frontmatter___reviews',
  LogoChildrenMarkdownRemarkFrontmatterSubtitle = 'logo___childrenMarkdownRemark___frontmatter___subtitle',
  LogoChildrenMarkdownRemarkFrontmatterTags = 'logo___childrenMarkdownRemark___frontmatter___tags',
  LogoChildrenMarkdownRemarkFrontmatterTitle = 'logo___childrenMarkdownRemark___frontmatter___title',
  LogoChildrenMarkdownRemarkHeadings = 'logo___childrenMarkdownRemark___headings',
  LogoChildrenMarkdownRemarkHeadingsDepth = 'logo___childrenMarkdownRemark___headings___depth',
  LogoChildrenMarkdownRemarkHeadingsId = 'logo___childrenMarkdownRemark___headings___id',
  LogoChildrenMarkdownRemarkHeadingsValue = 'logo___childrenMarkdownRemark___headings___value',
  LogoChildrenMarkdownRemarkHtml = 'logo___childrenMarkdownRemark___html',
  LogoChildrenMarkdownRemarkHtmlAst = 'logo___childrenMarkdownRemark___htmlAst',
  LogoChildrenMarkdownRemarkId = 'logo___childrenMarkdownRemark___id',
  LogoChildrenMarkdownRemarkInternalContent = 'logo___childrenMarkdownRemark___internal___content',
  LogoChildrenMarkdownRemarkInternalContentDigest = 'logo___childrenMarkdownRemark___internal___contentDigest',
  LogoChildrenMarkdownRemarkInternalDescription = 'logo___childrenMarkdownRemark___internal___description',
  LogoChildrenMarkdownRemarkInternalFieldOwners = 'logo___childrenMarkdownRemark___internal___fieldOwners',
  LogoChildrenMarkdownRemarkInternalIgnoreType = 'logo___childrenMarkdownRemark___internal___ignoreType',
  LogoChildrenMarkdownRemarkInternalMediaType = 'logo___childrenMarkdownRemark___internal___mediaType',
  LogoChildrenMarkdownRemarkInternalOwner = 'logo___childrenMarkdownRemark___internal___owner',
  LogoChildrenMarkdownRemarkInternalType = 'logo___childrenMarkdownRemark___internal___type',
  LogoChildrenMarkdownRemarkParentChildren = 'logo___childrenMarkdownRemark___parent___children',
  LogoChildrenMarkdownRemarkParentId = 'logo___childrenMarkdownRemark___parent___id',
  LogoChildrenMarkdownRemarkRawMarkdownBody = 'logo___childrenMarkdownRemark___rawMarkdownBody',
  LogoChildrenMarkdownRemarkTableOfContents = 'logo___childrenMarkdownRemark___tableOfContents',
  LogoChildrenMarkdownRemarkTimeToRead = 'logo___childrenMarkdownRemark___timeToRead',
  LogoChildrenMarkdownRemarkWordCountParagraphs = 'logo___childrenMarkdownRemark___wordCount___paragraphs',
  LogoChildrenMarkdownRemarkWordCountSentences = 'logo___childrenMarkdownRemark___wordCount___sentences',
  LogoChildrenMarkdownRemarkWordCountWords = 'logo___childrenMarkdownRemark___wordCount___words',
  LogoChildrenMdx = 'logo___childrenMdx',
  LogoChildrenMdxBody = 'logo___childrenMdx___body',
  LogoChildrenMdxChildren = 'logo___childrenMdx___children',
  LogoChildrenMdxChildrenChildren = 'logo___childrenMdx___children___children',
  LogoChildrenMdxChildrenId = 'logo___childrenMdx___children___id',
  LogoChildrenMdxExcerpt = 'logo___childrenMdx___excerpt',
  LogoChildrenMdxFieldsCollection = 'logo___childrenMdx___fields___collection',
  LogoChildrenMdxFieldsSlug = 'logo___childrenMdx___fields___slug',
  LogoChildrenMdxFileAbsolutePath = 'logo___childrenMdx___fileAbsolutePath',
  LogoChildrenMdxFrontmatterTitle = 'logo___childrenMdx___frontmatter___title',
  LogoChildrenMdxHeadings = 'logo___childrenMdx___headings',
  LogoChildrenMdxHeadingsDepth = 'logo___childrenMdx___headings___depth',
  LogoChildrenMdxHeadingsValue = 'logo___childrenMdx___headings___value',
  LogoChildrenMdxHtml = 'logo___childrenMdx___html',
  LogoChildrenMdxId = 'logo___childrenMdx___id',
  LogoChildrenMdxInternalContent = 'logo___childrenMdx___internal___content',
  LogoChildrenMdxInternalContentDigest = 'logo___childrenMdx___internal___contentDigest',
  LogoChildrenMdxInternalDescription = 'logo___childrenMdx___internal___description',
  LogoChildrenMdxInternalFieldOwners = 'logo___childrenMdx___internal___fieldOwners',
  LogoChildrenMdxInternalIgnoreType = 'logo___childrenMdx___internal___ignoreType',
  LogoChildrenMdxInternalMediaType = 'logo___childrenMdx___internal___mediaType',
  LogoChildrenMdxInternalOwner = 'logo___childrenMdx___internal___owner',
  LogoChildrenMdxInternalType = 'logo___childrenMdx___internal___type',
  LogoChildrenMdxMdxAst = 'logo___childrenMdx___mdxAST',
  LogoChildrenMdxParentChildren = 'logo___childrenMdx___parent___children',
  LogoChildrenMdxParentId = 'logo___childrenMdx___parent___id',
  LogoChildrenMdxRawBody = 'logo___childrenMdx___rawBody',
  LogoChildrenMdxSlug = 'logo___childrenMdx___slug',
  LogoChildrenMdxTableOfContents = 'logo___childrenMdx___tableOfContents',
  LogoChildrenMdxTimeToRead = 'logo___childrenMdx___timeToRead',
  LogoChildrenMdxWordCountParagraphs = 'logo___childrenMdx___wordCount___paragraphs',
  LogoChildrenMdxWordCountSentences = 'logo___childrenMdx___wordCount___sentences',
  LogoChildrenMdxWordCountWords = 'logo___childrenMdx___wordCount___words',
  LogoChildrenMediaJson = 'logo___childrenMediaJson',
  LogoChildrenMediaJsonChildren = 'logo___childrenMediaJson___children',
  LogoChildrenMediaJsonChildrenChildren = 'logo___childrenMediaJson___children___children',
  LogoChildrenMediaJsonChildrenId = 'logo___childrenMediaJson___children___id',
  LogoChildrenMediaJsonFieldsCollection = 'logo___childrenMediaJson___fields___collection',
  LogoChildrenMediaJsonId = 'logo___childrenMediaJson___id',
  LogoChildrenMediaJsonInternalContent = 'logo___childrenMediaJson___internal___content',
  LogoChildrenMediaJsonInternalContentDigest = 'logo___childrenMediaJson___internal___contentDigest',
  LogoChildrenMediaJsonInternalDescription = 'logo___childrenMediaJson___internal___description',
  LogoChildrenMediaJsonInternalFieldOwners = 'logo___childrenMediaJson___internal___fieldOwners',
  LogoChildrenMediaJsonInternalIgnoreType = 'logo___childrenMediaJson___internal___ignoreType',
  LogoChildrenMediaJsonInternalMediaType = 'logo___childrenMediaJson___internal___mediaType',
  LogoChildrenMediaJsonInternalOwner = 'logo___childrenMediaJson___internal___owner',
  LogoChildrenMediaJsonInternalType = 'logo___childrenMediaJson___internal___type',
  LogoChildrenMediaJsonLogoAbsolutePath = 'logo___childrenMediaJson___logo___absolutePath',
  LogoChildrenMediaJsonLogoAccessTime = 'logo___childrenMediaJson___logo___accessTime',
  LogoChildrenMediaJsonLogoAtime = 'logo___childrenMediaJson___logo___atime',
  LogoChildrenMediaJsonLogoAtimeMs = 'logo___childrenMediaJson___logo___atimeMs',
  LogoChildrenMediaJsonLogoBase = 'logo___childrenMediaJson___logo___base',
  LogoChildrenMediaJsonLogoBirthTime = 'logo___childrenMediaJson___logo___birthTime',
  LogoChildrenMediaJsonLogoBirthtime = 'logo___childrenMediaJson___logo___birthtime',
  LogoChildrenMediaJsonLogoBirthtimeMs = 'logo___childrenMediaJson___logo___birthtimeMs',
  LogoChildrenMediaJsonLogoBlksize = 'logo___childrenMediaJson___logo___blksize',
  LogoChildrenMediaJsonLogoBlocks = 'logo___childrenMediaJson___logo___blocks',
  LogoChildrenMediaJsonLogoChangeTime = 'logo___childrenMediaJson___logo___changeTime',
  LogoChildrenMediaJsonLogoChildren = 'logo___childrenMediaJson___logo___children',
  LogoChildrenMediaJsonLogoChildrenAudioJson = 'logo___childrenMediaJson___logo___childrenAudioJson',
  LogoChildrenMediaJsonLogoChildrenClientsJson = 'logo___childrenMediaJson___logo___childrenClientsJson',
  LogoChildrenMediaJsonLogoChildrenContentJson = 'logo___childrenMediaJson___logo___childrenContentJson',
  LogoChildrenMediaJsonLogoChildrenImageSharp = 'logo___childrenMediaJson___logo___childrenImageSharp',
  LogoChildrenMediaJsonLogoChildrenMarkdownRemark = 'logo___childrenMediaJson___logo___childrenMarkdownRemark',
  LogoChildrenMediaJsonLogoChildrenMdx = 'logo___childrenMediaJson___logo___childrenMdx',
  LogoChildrenMediaJsonLogoChildrenMediaJson = 'logo___childrenMediaJson___logo___childrenMediaJson',
  LogoChildrenMediaJsonLogoChildrenPrintJson = 'logo___childrenMediaJson___logo___childrenPrintJson',
  LogoChildrenMediaJsonLogoChildrenVideoJson = 'logo___childrenMediaJson___logo___childrenVideoJson',
  LogoChildrenMediaJsonLogoCtime = 'logo___childrenMediaJson___logo___ctime',
  LogoChildrenMediaJsonLogoCtimeMs = 'logo___childrenMediaJson___logo___ctimeMs',
  LogoChildrenMediaJsonLogoDev = 'logo___childrenMediaJson___logo___dev',
  LogoChildrenMediaJsonLogoDir = 'logo___childrenMediaJson___logo___dir',
  LogoChildrenMediaJsonLogoExt = 'logo___childrenMediaJson___logo___ext',
  LogoChildrenMediaJsonLogoExtension = 'logo___childrenMediaJson___logo___extension',
  LogoChildrenMediaJsonLogoGid = 'logo___childrenMediaJson___logo___gid',
  LogoChildrenMediaJsonLogoId = 'logo___childrenMediaJson___logo___id',
  LogoChildrenMediaJsonLogoIno = 'logo___childrenMediaJson___logo___ino',
  LogoChildrenMediaJsonLogoMode = 'logo___childrenMediaJson___logo___mode',
  LogoChildrenMediaJsonLogoModifiedTime = 'logo___childrenMediaJson___logo___modifiedTime',
  LogoChildrenMediaJsonLogoMtime = 'logo___childrenMediaJson___logo___mtime',
  LogoChildrenMediaJsonLogoMtimeMs = 'logo___childrenMediaJson___logo___mtimeMs',
  LogoChildrenMediaJsonLogoName = 'logo___childrenMediaJson___logo___name',
  LogoChildrenMediaJsonLogoNlink = 'logo___childrenMediaJson___logo___nlink',
  LogoChildrenMediaJsonLogoPrettySize = 'logo___childrenMediaJson___logo___prettySize',
  LogoChildrenMediaJsonLogoPublicUrl = 'logo___childrenMediaJson___logo___publicURL',
  LogoChildrenMediaJsonLogoRdev = 'logo___childrenMediaJson___logo___rdev',
  LogoChildrenMediaJsonLogoRelativeDirectory = 'logo___childrenMediaJson___logo___relativeDirectory',
  LogoChildrenMediaJsonLogoRelativePath = 'logo___childrenMediaJson___logo___relativePath',
  LogoChildrenMediaJsonLogoRoot = 'logo___childrenMediaJson___logo___root',
  LogoChildrenMediaJsonLogoSize = 'logo___childrenMediaJson___logo___size',
  LogoChildrenMediaJsonLogoSourceInstanceName = 'logo___childrenMediaJson___logo___sourceInstanceName',
  LogoChildrenMediaJsonLogoUid = 'logo___childrenMediaJson___logo___uid',
  LogoChildrenMediaJsonName = 'logo___childrenMediaJson___name',
  LogoChildrenMediaJsonParentChildren = 'logo___childrenMediaJson___parent___children',
  LogoChildrenMediaJsonParentId = 'logo___childrenMediaJson___parent___id',
  LogoChildrenMediaJsonUrl = 'logo___childrenMediaJson___url',
  LogoChildrenPrintJson = 'logo___childrenPrintJson',
  LogoChildrenPrintJsonChildren = 'logo___childrenPrintJson___children',
  LogoChildrenPrintJsonChildrenChildren = 'logo___childrenPrintJson___children___children',
  LogoChildrenPrintJsonChildrenId = 'logo___childrenPrintJson___children___id',
  LogoChildrenPrintJsonFieldsCollection = 'logo___childrenPrintJson___fields___collection',
  LogoChildrenPrintJsonId = 'logo___childrenPrintJson___id',
  LogoChildrenPrintJsonInternalContent = 'logo___childrenPrintJson___internal___content',
  LogoChildrenPrintJsonInternalContentDigest = 'logo___childrenPrintJson___internal___contentDigest',
  LogoChildrenPrintJsonInternalDescription = 'logo___childrenPrintJson___internal___description',
  LogoChildrenPrintJsonInternalFieldOwners = 'logo___childrenPrintJson___internal___fieldOwners',
  LogoChildrenPrintJsonInternalIgnoreType = 'logo___childrenPrintJson___internal___ignoreType',
  LogoChildrenPrintJsonInternalMediaType = 'logo___childrenPrintJson___internal___mediaType',
  LogoChildrenPrintJsonInternalOwner = 'logo___childrenPrintJson___internal___owner',
  LogoChildrenPrintJsonInternalType = 'logo___childrenPrintJson___internal___type',
  LogoChildrenPrintJsonParentChildren = 'logo___childrenPrintJson___parent___children',
  LogoChildrenPrintJsonParentId = 'logo___childrenPrintJson___parent___id',
  LogoChildrenPrintJsonSource = 'logo___childrenPrintJson___source',
  LogoChildrenPrintJsonThumbnail = 'logo___childrenPrintJson___thumbnail',
  LogoChildrenPrintJsonTitle = 'logo___childrenPrintJson___title',
  LogoChildrenPrintJsonUrl = 'logo___childrenPrintJson___url',
  LogoChildrenVideoJson = 'logo___childrenVideoJson',
  LogoChildrenVideoJsonChildren = 'logo___childrenVideoJson___children',
  LogoChildrenVideoJsonChildrenChildren = 'logo___childrenVideoJson___children___children',
  LogoChildrenVideoJsonChildrenId = 'logo___childrenVideoJson___children___id',
  LogoChildrenVideoJsonFieldsCollection = 'logo___childrenVideoJson___fields___collection',
  LogoChildrenVideoJsonId = 'logo___childrenVideoJson___id',
  LogoChildrenVideoJsonInternalContent = 'logo___childrenVideoJson___internal___content',
  LogoChildrenVideoJsonInternalContentDigest = 'logo___childrenVideoJson___internal___contentDigest',
  LogoChildrenVideoJsonInternalDescription = 'logo___childrenVideoJson___internal___description',
  LogoChildrenVideoJsonInternalFieldOwners = 'logo___childrenVideoJson___internal___fieldOwners',
  LogoChildrenVideoJsonInternalIgnoreType = 'logo___childrenVideoJson___internal___ignoreType',
  LogoChildrenVideoJsonInternalMediaType = 'logo___childrenVideoJson___internal___mediaType',
  LogoChildrenVideoJsonInternalOwner = 'logo___childrenVideoJson___internal___owner',
  LogoChildrenVideoJsonInternalType = 'logo___childrenVideoJson___internal___type',
  LogoChildrenVideoJsonParentChildren = 'logo___childrenVideoJson___parent___children',
  LogoChildrenVideoJsonParentId = 'logo___childrenVideoJson___parent___id',
  LogoChildrenVideoJsonSource = 'logo___childrenVideoJson___source',
  LogoChildrenVideoJsonTitle = 'logo___childrenVideoJson___title',
  LogoChildrenVideoJsonUrl = 'logo___childrenVideoJson___url',
  LogoChildrenChildren = 'logo___children___children',
  LogoChildrenChildrenChildren = 'logo___children___children___children',
  LogoChildrenChildrenId = 'logo___children___children___id',
  LogoChildrenId = 'logo___children___id',
  LogoChildrenInternalContent = 'logo___children___internal___content',
  LogoChildrenInternalContentDigest = 'logo___children___internal___contentDigest',
  LogoChildrenInternalDescription = 'logo___children___internal___description',
  LogoChildrenInternalFieldOwners = 'logo___children___internal___fieldOwners',
  LogoChildrenInternalIgnoreType = 'logo___children___internal___ignoreType',
  LogoChildrenInternalMediaType = 'logo___children___internal___mediaType',
  LogoChildrenInternalOwner = 'logo___children___internal___owner',
  LogoChildrenInternalType = 'logo___children___internal___type',
  LogoChildrenParentChildren = 'logo___children___parent___children',
  LogoChildrenParentId = 'logo___children___parent___id',
  LogoCtime = 'logo___ctime',
  LogoCtimeMs = 'logo___ctimeMs',
  LogoDev = 'logo___dev',
  LogoDir = 'logo___dir',
  LogoExt = 'logo___ext',
  LogoExtension = 'logo___extension',
  LogoGid = 'logo___gid',
  LogoId = 'logo___id',
  LogoIno = 'logo___ino',
  LogoInternalContent = 'logo___internal___content',
  LogoInternalContentDigest = 'logo___internal___contentDigest',
  LogoInternalDescription = 'logo___internal___description',
  LogoInternalFieldOwners = 'logo___internal___fieldOwners',
  LogoInternalIgnoreType = 'logo___internal___ignoreType',
  LogoInternalMediaType = 'logo___internal___mediaType',
  LogoInternalOwner = 'logo___internal___owner',
  LogoInternalType = 'logo___internal___type',
  LogoMode = 'logo___mode',
  LogoModifiedTime = 'logo___modifiedTime',
  LogoMtime = 'logo___mtime',
  LogoMtimeMs = 'logo___mtimeMs',
  LogoName = 'logo___name',
  LogoNlink = 'logo___nlink',
  LogoParentChildren = 'logo___parent___children',
  LogoParentChildrenChildren = 'logo___parent___children___children',
  LogoParentChildrenId = 'logo___parent___children___id',
  LogoParentId = 'logo___parent___id',
  LogoParentInternalContent = 'logo___parent___internal___content',
  LogoParentInternalContentDigest = 'logo___parent___internal___contentDigest',
  LogoParentInternalDescription = 'logo___parent___internal___description',
  LogoParentInternalFieldOwners = 'logo___parent___internal___fieldOwners',
  LogoParentInternalIgnoreType = 'logo___parent___internal___ignoreType',
  LogoParentInternalMediaType = 'logo___parent___internal___mediaType',
  LogoParentInternalOwner = 'logo___parent___internal___owner',
  LogoParentInternalType = 'logo___parent___internal___type',
  LogoParentParentChildren = 'logo___parent___parent___children',
  LogoParentParentId = 'logo___parent___parent___id',
  LogoPrettySize = 'logo___prettySize',
  LogoPublicUrl = 'logo___publicURL',
  LogoRdev = 'logo___rdev',
  LogoRelativeDirectory = 'logo___relativeDirectory',
  LogoRelativePath = 'logo___relativePath',
  LogoRoot = 'logo___root',
  LogoSize = 'logo___size',
  LogoSourceInstanceName = 'logo___sourceInstanceName',
  LogoUid = 'logo___uid',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Url = 'url',
}

export type MediaJsonFieldsFilterInput = {
  collection?: Maybe<StringQueryOperatorInput>;
};

export type MediaJsonFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  fields?: Maybe<MediaJsonFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  logo?: Maybe<FileFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type MediaJsonFilterListInput = {
  elemMatch?: Maybe<MediaJsonFilterInput>;
};

export type MediaJsonGroupConnection = {
  __typename?: 'MediaJsonGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MediaJsonEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<MediaJsonGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<MediaJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type MediaJsonGroupConnectionDistinctArgs = {
  field: MediaJsonFieldsEnum;
};

export type MediaJsonGroupConnectionGroupArgs = {
  field: MediaJsonFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type MediaJsonGroupConnectionMaxArgs = {
  field: MediaJsonFieldsEnum;
};

export type MediaJsonGroupConnectionMinArgs = {
  field: MediaJsonFieldsEnum;
};

export type MediaJsonGroupConnectionSumArgs = {
  field: MediaJsonFieldsEnum;
};

export type MediaJsonSortInput = {
  fields?: Maybe<Array<Maybe<MediaJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax?: Maybe<Scalars['Float']>;
  background?: Maybe<Scalars['String']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  turdSize?: Maybe<Scalars['Float']>;
  turnPolicy?: Maybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
}

export type PrintJson = Node & {
  __typename?: 'PrintJson';
  children: Array<Node>;
  fields?: Maybe<PrintJsonFields>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  source?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PrintJsonConnection = {
  __typename?: 'PrintJsonConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<PrintJsonEdge>;
  group: Array<PrintJsonGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<PrintJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PrintJsonConnectionDistinctArgs = {
  field: PrintJsonFieldsEnum;
};

export type PrintJsonConnectionGroupArgs = {
  field: PrintJsonFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type PrintJsonConnectionMaxArgs = {
  field: PrintJsonFieldsEnum;
};

export type PrintJsonConnectionMinArgs = {
  field: PrintJsonFieldsEnum;
};

export type PrintJsonConnectionSumArgs = {
  field: PrintJsonFieldsEnum;
};

export type PrintJsonEdge = {
  __typename?: 'PrintJsonEdge';
  next?: Maybe<PrintJson>;
  node: PrintJson;
  previous?: Maybe<PrintJson>;
};

export type PrintJsonFields = {
  __typename?: 'PrintJsonFields';
  collection?: Maybe<Scalars['String']>;
};

export enum PrintJsonFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FieldsCollection = 'fields___collection',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Source = 'source',
  Thumbnail = 'thumbnail',
  Title = 'title',
  Url = 'url',
}

export type PrintJsonFieldsFilterInput = {
  collection?: Maybe<StringQueryOperatorInput>;
};

export type PrintJsonFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  fields?: Maybe<PrintJsonFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  source?: Maybe<StringQueryOperatorInput>;
  thumbnail?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type PrintJsonFilterListInput = {
  elemMatch?: Maybe<PrintJsonFilterInput>;
};

export type PrintJsonGroupConnection = {
  __typename?: 'PrintJsonGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<PrintJsonEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<PrintJsonGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<PrintJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PrintJsonGroupConnectionDistinctArgs = {
  field: PrintJsonFieldsEnum;
};

export type PrintJsonGroupConnectionGroupArgs = {
  field: PrintJsonFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type PrintJsonGroupConnectionMaxArgs = {
  field: PrintJsonFieldsEnum;
};

export type PrintJsonGroupConnectionMinArgs = {
  field: PrintJsonFieldsEnum;
};

export type PrintJsonGroupConnectionSumArgs = {
  field: PrintJsonFieldsEnum;
};

export type PrintJsonSortInput = {
  fields?: Maybe<Array<Maybe<PrintJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Query = {
  __typename?: 'Query';
  allAudioJson: AudioJsonConnection;
  allClientsJson: ClientsJsonConnection;
  allContentJson: ContentJsonConnection;
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allMarkdownRemark: MarkdownRemarkConnection;
  allMdx: MdxConnection;
  allMediaJson: MediaJsonConnection;
  allPrintJson: PrintJsonConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  allVideoJson: VideoJsonConnection;
  audioJson?: Maybe<AudioJson>;
  clientsJson?: Maybe<ClientsJson>;
  contentJson?: Maybe<ContentJson>;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  imageSharp?: Maybe<ImageSharp>;
  markdownRemark?: Maybe<MarkdownRemark>;
  mdx?: Maybe<Mdx>;
  mediaJson?: Maybe<MediaJson>;
  printJson?: Maybe<PrintJson>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
  videoJson?: Maybe<VideoJson>;
};

export type QueryAllAudioJsonArgs = {
  filter?: Maybe<AudioJsonFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<AudioJsonSortInput>;
};

export type QueryAllClientsJsonArgs = {
  filter?: Maybe<ClientsJsonFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<ClientsJsonSortInput>;
};

export type QueryAllContentJsonArgs = {
  filter?: Maybe<ContentJsonFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<ContentJsonSortInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DirectorySortInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<FileSortInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<ImageSharpSortInput>;
};

export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<MarkdownRemarkSortInput>;
};

export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<MdxSortInput>;
};

export type QueryAllMediaJsonArgs = {
  filter?: Maybe<MediaJsonFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<MediaJsonSortInput>;
};

export type QueryAllPrintJsonArgs = {
  filter?: Maybe<PrintJsonFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<PrintJsonSortInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SiteSortInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SiteFunctionSortInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SitePageSortInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SitePluginSortInput>;
};

export type QueryAllVideoJsonArgs = {
  filter?: Maybe<VideoJsonFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<VideoJsonSortInput>;
};

export type QueryAudioJsonArgs = {
  children?: Maybe<NodeFilterListInput>;
  fields?: Maybe<AudioJsonFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  source?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type QueryClientsJsonArgs = {
  children?: Maybe<NodeFilterListInput>;
  fields?: Maybe<ClientsJsonFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  logo?: Maybe<FileFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type QueryContentJsonArgs = {
  children?: Maybe<NodeFilterListInput>;
  conferenceParticipation?: Maybe<ContentJsonConferenceParticipationFilterInput>;
  departmentalAndUniversityService?: Maybe<ContentJsonDepartmentalAndUniversityServiceFilterListInput>;
  education?: Maybe<ContentJsonEducationFilterListInput>;
  fields?: Maybe<ContentJsonFieldsFilterInput>;
  grantsAndFellowships?: Maybe<ContentJsonGrantsAndFellowshipsFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  invitedTalks?: Maybe<ContentJsonInvitedTalksFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  professionalAppointments?: Maybe<ContentJsonProfessionalAppointmentsFilterListInput>;
  professionalMemberships?: Maybe<ContentJsonProfessionalMembershipsFilterListInput>;
  publications?: Maybe<ContentJsonPublicationsFilterInput>;
  references?: Maybe<ContentJsonReferencesFilterListInput>;
  reviewingExperience?: Maybe<ContentJsonReviewingExperienceFilterListInput>;
  selectedPressAndMedia?: Maybe<ContentJsonSelectedPressAndMediaFilterListInput>;
  serviceToProfession?: Maybe<ContentJsonServiceToProfessionFilterListInput>;
  teachingAndSupervisionExperience?: Maybe<ContentJsonTeachingAndSupervisionExperienceFilterListInput>;
};

export type QueryDirectoryArgs = {
  absolutePath?: Maybe<StringQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
  absolutePath?: Maybe<StringQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  childAudioJson?: Maybe<AudioJsonFilterInput>;
  childClientsJson?: Maybe<ClientsJsonFilterInput>;
  childContentJson?: Maybe<ContentJsonFilterInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
  childMediaJson?: Maybe<MediaJsonFilterInput>;
  childPrintJson?: Maybe<PrintJsonFilterInput>;
  childVideoJson?: Maybe<VideoJsonFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  childrenAudioJson?: Maybe<AudioJsonFilterListInput>;
  childrenClientsJson?: Maybe<ClientsJsonFilterListInput>;
  childrenContentJson?: Maybe<ContentJsonFilterListInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childrenMediaJson?: Maybe<MediaJsonFilterListInput>;
  childrenPrintJson?: Maybe<PrintJsonFilterListInput>;
  childrenVideoJson?: Maybe<VideoJsonFilterListInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
};

export type QueryImageSharpArgs = {
  children?: Maybe<NodeFilterListInput>;
  fields?: Maybe<ImageSharpFieldsFilterInput>;
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
};

export type QueryMarkdownRemarkArgs = {
  children?: Maybe<NodeFilterListInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
};

export type QueryMdxArgs = {
  body?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MdxFieldsFilterInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  rawBody?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
};

export type QueryMediaJsonArgs = {
  children?: Maybe<NodeFilterListInput>;
  fields?: Maybe<MediaJsonFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  logo?: Maybe<FileFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type QueryPrintJsonArgs = {
  children?: Maybe<NodeFilterListInput>;
  fields?: Maybe<PrintJsonFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  source?: Maybe<StringQueryOperatorInput>;
  thumbnail?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  host?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  port?: Maybe<IntQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  functionRoute?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
  children?: Maybe<NodeFilterListInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type QuerySitePluginArgs = {
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  subPluginPaths?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type QueryVideoJsonArgs = {
  children?: Maybe<NodeFilterListInput>;
  fields?: Maybe<VideoJsonFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  source?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
};

export type SiteBuildTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Host = 'host',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  Port = 'port',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataKeywords = 'siteMetadata___keywords',
  SiteMetadataNavLinks = 'siteMetadata___navLinks',
  SiteMetadataNavLinksLink = 'siteMetadata___navLinks___link',
  SiteMetadataNavLinksName = 'siteMetadata___navLinks___name',
  SiteMetadataNavLinksTarget = 'siteMetadata___navLinks___target',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataSocialFacebook = 'siteMetadata___social___facebook',
  SiteMetadataSocialGscholar = 'siteMetadata___social___gscholar',
  SiteMetadataSocialInstagram = 'siteMetadata___social___instagram',
  SiteMetadataSocialLinkedin = 'siteMetadata___social___linkedin',
  SiteMetadataSocialResearchGate = 'siteMetadata___social___researchGate',
  SiteMetadataSocialTwitch = 'siteMetadata___social___twitch',
  SiteMetadataSocialTwitter = 'siteMetadata___social___twitter',
  SiteMetadataSocialYoutube = 'siteMetadata___social___youtube',
  SiteMetadataTitle = 'siteMetadata___title',
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  host?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  port?: Maybe<IntQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FunctionRoute = 'functionRoute',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginName = 'pluginName',
  RelativeCompiledFilePath = 'relativeCompiledFilePath',
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  functionRoute?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  context?: Maybe<SitePageContext>;
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  matchPath?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  currentPage?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  next?: Maybe<SitePageContextNext>;
  numPages?: Maybe<Scalars['Int']>;
  prev?: Maybe<SitePageContextPrev>;
  skip?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  currentPage?: Maybe<IntQueryOperatorInput>;
  limit?: Maybe<IntQueryOperatorInput>;
  next?: Maybe<SitePageContextNextFilterInput>;
  numPages?: Maybe<IntQueryOperatorInput>;
  prev?: Maybe<SitePageContextPrevFilterInput>;
  skip?: Maybe<IntQueryOperatorInput>;
  tag?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNext = {
  __typename?: 'SitePageContextNext';
  fields?: Maybe<SitePageContextNextFields>;
  frontmatter?: Maybe<SitePageContextNextFrontmatter>;
};

export type SitePageContextNextFields = {
  __typename?: 'SitePageContextNextFields';
  path?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextNextFieldsFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNextFilterInput = {
  fields?: Maybe<SitePageContextNextFieldsFilterInput>;
  frontmatter?: Maybe<SitePageContextNextFrontmatterFilterInput>;
};

export type SitePageContextNextFrontmatter = {
  __typename?: 'SitePageContextNextFrontmatter';
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextNextFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPrev = {
  __typename?: 'SitePageContextPrev';
  fields?: Maybe<SitePageContextPrevFields>;
  frontmatter?: Maybe<SitePageContextPrevFrontmatter>;
};

export type SitePageContextPrevFields = {
  __typename?: 'SitePageContextPrevFields';
  path?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextPrevFieldsFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPrevFilterInput = {
  fields?: Maybe<SitePageContextPrevFieldsFilterInput>;
  frontmatter?: Maybe<SitePageContextPrevFrontmatterFilterInput>;
};

export type SitePageContextPrevFrontmatter = {
  __typename?: 'SitePageContextPrevFrontmatter';
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextPrevFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ContextCurrentPage = 'context___currentPage',
  ContextLimit = 'context___limit',
  ContextNextFieldsPath = 'context___next___fields___path',
  ContextNextFieldsSlug = 'context___next___fields___slug',
  ContextNextFrontmatterTitle = 'context___next___frontmatter___title',
  ContextNumPages = 'context___numPages',
  ContextPrevFieldsPath = 'context___prev___fields___path',
  ContextPrevFieldsSlug = 'context___prev___fields___slug',
  ContextPrevFrontmatterTitle = 'context___prev___frontmatter___title',
  ContextSkip = 'context___skip',
  ContextTag = 'context___tag',
  Id = 'id',
  InternalComponentName = 'internalComponentName',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  MatchPath = 'matchPath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  PluginCreatorId = 'pluginCreatorId',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptionsAliasComponents = 'pluginCreator___pluginOptions___alias___components',
  PluginCreatorPluginOptionsAliasImages = 'pluginCreator___pluginOptions___alias___images',
  PluginCreatorPluginOptionsAliasUtils = 'pluginCreator___pluginOptions___alias___utils',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsAnonymize = 'pluginCreator___pluginOptions___anonymize',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___backgroundColor',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsClassName = 'pluginCreator___pluginOptions___className',
  PluginCreatorPluginOptionsCreateLinkInHead = 'pluginCreator___pluginOptions___createLinkInHead',
  PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  PluginCreatorPluginOptionsDecoding = 'pluginCreator___pluginOptions___decoding',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsDisableBgImage = 'pluginCreator___pluginOptions___disableBgImage',
  PluginCreatorPluginOptionsDisableBgImageOnAlpha = 'pluginCreator___pluginOptions___disableBgImageOnAlpha',
  PluginCreatorPluginOptionsDisableVendorPrefixes = 'pluginCreator___pluginOptions___disableVendorPrefixes',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsDisplayName = 'pluginCreator___pluginOptions___displayName',
  PluginCreatorPluginOptionsEnableWebVitalsTracking = 'pluginCreator___pluginOptions___enableWebVitalsTracking',
  PluginCreatorPluginOptionsEntryLimit = 'pluginCreator___pluginOptions___entryLimit',
  PluginCreatorPluginOptionsExtensions = 'pluginCreator___pluginOptions___extensions',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsFileName = 'pluginCreator___pluginOptions___fileName',
  PluginCreatorPluginOptionsHead = 'pluginCreator___pluginOptions___head',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsIgnore = 'pluginCreator___pluginOptions___ignore',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsLessBabel = 'pluginCreator___pluginOptions___lessBabel',
  PluginCreatorPluginOptionsLinkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
  PluginCreatorPluginOptionsLoading = 'pluginCreator___pluginOptions___loading',
  PluginCreatorPluginOptionsMarkdownCaptions = 'pluginCreator___pluginOptions___markdownCaptions',
  PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
  PluginCreatorPluginOptionsMediaTypes = 'pluginCreator___pluginOptions___mediaTypes',
  PluginCreatorPluginOptionsMinify = 'pluginCreator___pluginOptions___minify',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsNamespace = 'pluginCreator___pluginOptions___namespace',
  PluginCreatorPluginOptionsOffsetY = 'pluginCreator___pluginOptions___offsetY',
  PluginCreatorPluginOptionsOutput = 'pluginCreator___pluginOptions___output',
  PluginCreatorPluginOptionsPageTransitionDelay = 'pluginCreator___pluginOptions___pageTransitionDelay',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsPathToConfigModule = 'pluginCreator___pluginOptions___pathToConfigModule',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsNodeApIs = 'pluginCreator___pluginOptions___plugins___nodeAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsSsrApIs = 'pluginCreator___pluginOptions___plugins___ssrAPIs',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPrefix = 'pluginCreator___pluginOptions___prefix',
  PluginCreatorPluginOptionsPure = 'pluginCreator___pluginOptions___pure',
  PluginCreatorPluginOptionsQuality = 'pluginCreator___pluginOptions___quality',
  PluginCreatorPluginOptionsQuery = 'pluginCreator___pluginOptions___query',
  PluginCreatorPluginOptionsRespectDnt = 'pluginCreator___pluginOptions___respectDNT',
  PluginCreatorPluginOptionsRoot = 'pluginCreator___pluginOptions___root',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsShowCaptions = 'pluginCreator___pluginOptions___showCaptions',
  PluginCreatorPluginOptionsSizeByPixelDensity = 'pluginCreator___pluginOptions___sizeByPixelDensity',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsTemplatePath = 'pluginCreator___pluginOptions___templatePath',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsTracedSvg = 'pluginCreator___pluginOptions___tracedSVG',
  PluginCreatorPluginOptionsTrackingId = 'pluginCreator___pluginOptions___trackingId',
  PluginCreatorPluginOptionsTranspileTemplateLiterals = 'pluginCreator___pluginOptions___transpileTemplateLiterals',
  PluginCreatorPluginOptionsWithWebp = 'pluginCreator___pluginOptions___withWebp',
  PluginCreatorPluginOptionsWrapperStyle = 'pluginCreator___pluginOptions___wrapperStyle',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorSubPluginPaths = 'pluginCreator___subPluginPaths',
  PluginCreatorVersion = 'pluginCreator___version',
}

export type SitePageFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<SitePluginPackageJson>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  subPluginPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = 'browserAPIs',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeApIs = 'nodeAPIs',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonMain = 'packageJson___main',
  PackageJsonName = 'packageJson___name',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonVersion = 'packageJson___version',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginFilepath = 'pluginFilepath',
  PluginOptionsAliasComponents = 'pluginOptions___alias___components',
  PluginOptionsAliasImages = 'pluginOptions___alias___images',
  PluginOptionsAliasUtils = 'pluginOptions___alias___utils',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsAnonymize = 'pluginOptions___anonymize',
  PluginOptionsBackgroundColor = 'pluginOptions___backgroundColor',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsClassName = 'pluginOptions___className',
  PluginOptionsCreateLinkInHead = 'pluginOptions___createLinkInHead',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsDecoding = 'pluginOptions___decoding',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsDisableBgImage = 'pluginOptions___disableBgImage',
  PluginOptionsDisableBgImageOnAlpha = 'pluginOptions___disableBgImageOnAlpha',
  PluginOptionsDisableVendorPrefixes = 'pluginOptions___disableVendorPrefixes',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsDisplayName = 'pluginOptions___displayName',
  PluginOptionsEnableWebVitalsTracking = 'pluginOptions___enableWebVitalsTracking',
  PluginOptionsEntryLimit = 'pluginOptions___entryLimit',
  PluginOptionsExtensions = 'pluginOptions___extensions',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsFileName = 'pluginOptions___fileName',
  PluginOptionsHead = 'pluginOptions___head',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsIgnore = 'pluginOptions___ignore',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsLessBabel = 'pluginOptions___lessBabel',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsLoading = 'pluginOptions___loading',
  PluginOptionsMarkdownCaptions = 'pluginOptions___markdownCaptions',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsMediaTypes = 'pluginOptions___mediaTypes',
  PluginOptionsMinify = 'pluginOptions___minify',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsNamespace = 'pluginOptions___namespace',
  PluginOptionsOffsetY = 'pluginOptions___offsetY',
  PluginOptionsOutput = 'pluginOptions___output',
  PluginOptionsPageTransitionDelay = 'pluginOptions___pageTransitionDelay',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsNodeApIs = 'pluginOptions___plugins___nodeAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsPluginsPluginOptionsBackgroundColor = 'pluginOptions___plugins___pluginOptions___backgroundColor',
  PluginOptionsPluginsPluginOptionsClassName = 'pluginOptions___plugins___pluginOptions___className',
  PluginOptionsPluginsPluginOptionsDecoding = 'pluginOptions___plugins___pluginOptions___decoding',
  PluginOptionsPluginsPluginOptionsDisableBgImage = 'pluginOptions___plugins___pluginOptions___disableBgImage',
  PluginOptionsPluginsPluginOptionsDisableBgImageOnAlpha = 'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha',
  PluginOptionsPluginsPluginOptionsLinkImagesToOriginal = 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal',
  PluginOptionsPluginsPluginOptionsLoading = 'pluginOptions___plugins___pluginOptions___loading',
  PluginOptionsPluginsPluginOptionsMarkdownCaptions = 'pluginOptions___plugins___pluginOptions___markdownCaptions',
  PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  PluginOptionsPluginsPluginOptionsOffsetY = 'pluginOptions___plugins___pluginOptions___offsetY',
  PluginOptionsPluginsPluginOptionsQuality = 'pluginOptions___plugins___pluginOptions___quality',
  PluginOptionsPluginsPluginOptionsShowCaptions = 'pluginOptions___plugins___pluginOptions___showCaptions',
  PluginOptionsPluginsPluginOptionsSizeByPixelDensity = 'pluginOptions___plugins___pluginOptions___sizeByPixelDensity',
  PluginOptionsPluginsPluginOptionsTracedSvg = 'pluginOptions___plugins___pluginOptions___tracedSVG',
  PluginOptionsPluginsPluginOptionsWithWebp = 'pluginOptions___plugins___pluginOptions___withWebp',
  PluginOptionsPluginsPluginOptionsWrapperStyle = 'pluginOptions___plugins___pluginOptions___wrapperStyle',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsSsrApIs = 'pluginOptions___plugins___ssrAPIs',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPrefix = 'pluginOptions___prefix',
  PluginOptionsPure = 'pluginOptions___pure',
  PluginOptionsQuality = 'pluginOptions___quality',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsRespectDnt = 'pluginOptions___respectDNT',
  PluginOptionsRoot = 'pluginOptions___root',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsShowCaptions = 'pluginOptions___showCaptions',
  PluginOptionsSizeByPixelDensity = 'pluginOptions___sizeByPixelDensity',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsSvgoConfigPluginsPrefixIds = 'pluginOptions___svgoConfig___plugins___prefixIds',
  PluginOptionsTemplatePath = 'pluginOptions___templatePath',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsTracedSvg = 'pluginOptions___tracedSVG',
  PluginOptionsTrackingId = 'pluginOptions___trackingId',
  PluginOptionsTranspileTemplateLiterals = 'pluginOptions___transpileTemplateLiterals',
  PluginOptionsWithWebp = 'pluginOptions___withWebp',
  PluginOptionsWrapperStyle = 'pluginOptions___wrapperStyle',
  Resolve = 'resolve',
  SsrApIs = 'ssrAPIs',
  SubPluginPaths = 'subPluginPaths',
  Version = 'version',
}

export type SitePluginFilterInput = {
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  subPluginPaths?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  description?: Maybe<Scalars['String']>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  license?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  alias?: Maybe<SitePluginPluginOptionsAlias>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  anonymize?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  cacheDigest?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  crossOrigin?: Maybe<Scalars['String']>;
  decoding?: Maybe<Scalars['String']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableVendorPrefixes?: Maybe<Scalars['Boolean']>;
  display?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['Boolean']>;
  enableWebVitalsTracking?: Maybe<Scalars['Boolean']>;
  entryLimit?: Maybe<Scalars['Int']>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  failOnError?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['Boolean']>;
  head?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  ignore?: Maybe<Array<Maybe<Scalars['String']>>>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  lessBabel?: Maybe<Scalars['Boolean']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  maxWidth?: Maybe<Scalars['Int']>;
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  minify?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
  offsetY?: Maybe<Scalars['Int']>;
  output?: Maybe<Scalars['String']>;
  pageTransitionDelay?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  pathToConfigModule?: Maybe<Scalars['String']>;
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  prefix?: Maybe<Scalars['String']>;
  pure?: Maybe<Scalars['Boolean']>;
  quality?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  respectDNT?: Maybe<Scalars['Boolean']>;
  root?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  start_url?: Maybe<Scalars['String']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  svgoConfig?: Maybe<SitePluginPluginOptionsSvgoConfig>;
  templatePath?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  trackingId?: Maybe<Scalars['String']>;
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  wrapperStyle?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsAlias = {
  __typename?: 'SitePluginPluginOptionsAlias';
  components?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['String']>;
  utils?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsAliasFilterInput = {
  components?: Maybe<StringQueryOperatorInput>;
  images?: Maybe<StringQueryOperatorInput>;
  utils?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  alias?: Maybe<SitePluginPluginOptionsAliasFilterInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  anonymize?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  className?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  decoding?: Maybe<StringQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableVendorPrefixes?: Maybe<BooleanQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  displayName?: Maybe<BooleanQueryOperatorInput>;
  enableWebVitalsTracking?: Maybe<BooleanQueryOperatorInput>;
  entryLimit?: Maybe<IntQueryOperatorInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<BooleanQueryOperatorInput>;
  head?: Maybe<BooleanQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  ignore?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  lessBabel?: Maybe<BooleanQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  mediaTypes?: Maybe<StringQueryOperatorInput>;
  minify?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  offsetY?: Maybe<IntQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  pageTransitionDelay?: Maybe<IntQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  pathToConfigModule?: Maybe<StringQueryOperatorInput>;
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  prefix?: Maybe<StringQueryOperatorInput>;
  pure?: Maybe<BooleanQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  respectDNT?: Maybe<BooleanQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  svgoConfig?: Maybe<SitePluginPluginOptionsSvgoConfigFilterInput>;
  templatePath?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
  __typename?: 'SitePluginPluginOptionsPlugins';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  __typename?: 'SitePluginPluginOptionsPluginsPluginOptions';
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  decoding?: Maybe<Scalars['String']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  maxWidth?: Maybe<Scalars['Int']>;
  offsetY?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  wrapperStyle?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  className?: Maybe<StringQueryOperatorInput>;
  decoding?: Maybe<StringQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  offsetY?: Maybe<IntQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSvgoConfig = {
  __typename?: 'SitePluginPluginOptionsSvgoConfig';
  plugins?: Maybe<SitePluginPluginOptionsSvgoConfigPlugins>;
};

export type SitePluginPluginOptionsSvgoConfigFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsSvgoConfigPluginsFilterInput>;
};

export type SitePluginPluginOptionsSvgoConfigPlugins = {
  __typename?: 'SitePluginPluginOptionsSvgoConfigPlugins';
  prefixIds?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsSvgoConfigPluginsFilterInput = {
  prefixIds?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  navLinks?: Maybe<Array<Maybe<SiteSiteMetadataNavLinks>>>;
  siteUrl?: Maybe<Scalars['String']>;
  social?: Maybe<SiteSiteMetadataSocial>;
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  author?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  navLinks?: Maybe<SiteSiteMetadataNavLinksFilterListInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  social?: Maybe<SiteSiteMetadataSocialFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataNavLinks = {
  __typename?: 'SiteSiteMetadataNavLinks';
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataNavLinksFilterInput = {
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataNavLinksFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataNavLinksFilterInput>;
};

export type SiteSiteMetadataSocial = {
  __typename?: 'SiteSiteMetadataSocial';
  facebook?: Maybe<Scalars['String']>;
  gscholar?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  researchGate?: Maybe<Scalars['String']>;
  twitch?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataSocialFilterInput = {
  facebook?: Maybe<StringQueryOperatorInput>;
  gscholar?: Maybe<StringQueryOperatorInput>;
  instagram?: Maybe<StringQueryOperatorInput>;
  linkedin?: Maybe<StringQueryOperatorInput>;
  researchGate?: Maybe<StringQueryOperatorInput>;
  twitch?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  youtube?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus?: Maybe<ImageCropFocus>;
  duotone?: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type VideoJson = Node & {
  __typename?: 'VideoJson';
  children: Array<Node>;
  fields?: Maybe<VideoJsonFields>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  source?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type VideoJsonConnection = {
  __typename?: 'VideoJsonConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<VideoJsonEdge>;
  group: Array<VideoJsonGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<VideoJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type VideoJsonConnectionDistinctArgs = {
  field: VideoJsonFieldsEnum;
};

export type VideoJsonConnectionGroupArgs = {
  field: VideoJsonFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type VideoJsonConnectionMaxArgs = {
  field: VideoJsonFieldsEnum;
};

export type VideoJsonConnectionMinArgs = {
  field: VideoJsonFieldsEnum;
};

export type VideoJsonConnectionSumArgs = {
  field: VideoJsonFieldsEnum;
};

export type VideoJsonEdge = {
  __typename?: 'VideoJsonEdge';
  next?: Maybe<VideoJson>;
  node: VideoJson;
  previous?: Maybe<VideoJson>;
};

export type VideoJsonFields = {
  __typename?: 'VideoJsonFields';
  collection?: Maybe<Scalars['String']>;
};

export enum VideoJsonFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FieldsCollection = 'fields___collection',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Source = 'source',
  Title = 'title',
  Url = 'url',
}

export type VideoJsonFieldsFilterInput = {
  collection?: Maybe<StringQueryOperatorInput>;
};

export type VideoJsonFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  fields?: Maybe<VideoJsonFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  source?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type VideoJsonFilterListInput = {
  elemMatch?: Maybe<VideoJsonFilterInput>;
};

export type VideoJsonGroupConnection = {
  __typename?: 'VideoJsonGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<VideoJsonEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<VideoJsonGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<VideoJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type VideoJsonGroupConnectionDistinctArgs = {
  field: VideoJsonFieldsEnum;
};

export type VideoJsonGroupConnectionGroupArgs = {
  field: VideoJsonFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type VideoJsonGroupConnectionMaxArgs = {
  field: VideoJsonFieldsEnum;
};

export type VideoJsonGroupConnectionMinArgs = {
  field: VideoJsonFieldsEnum;
};

export type VideoJsonGroupConnectionSumArgs = {
  field: VideoJsonFieldsEnum;
};

export type VideoJsonSortInput = {
  fields?: Maybe<Array<Maybe<VideoJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type GatsbyImageSharpFixedFragment = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<string>;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed';
  tracedSVG?: Maybe<string>;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<string>;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: Maybe<string>;
  srcSetWebp?: Maybe<string>;
};

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed';
  tracedSVG?: Maybe<string>;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: Maybe<string>;
  srcSetWebp?: Maybe<string>;
};

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed';
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed';
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: Maybe<string>;
  srcSetWebp?: Maybe<string>;
};

export type GatsbyImageSharpFluidFragment = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<string>;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  __typename?: 'ImageSharpFluid';
  maxHeight: number;
  maxWidth: number;
};

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid';
  tracedSVG?: Maybe<string>;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<string>;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: Maybe<string>;
  srcSetWebp?: Maybe<string>;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid';
  tracedSVG?: Maybe<string>;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: Maybe<string>;
  srcSetWebp?: Maybe<string>;
  sizes: string;
};

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: Maybe<string>;
  srcSetWebp?: Maybe<string>;
  sizes: string;
};

export type PagesQueryQueryVariables = Exact<{ [key: string]: never }>;

export type PagesQueryQuery = {
  __typename?: 'Query';
  allSiteFunction: {
    __typename?: 'SiteFunctionConnection';
    nodes: Array<{ __typename?: 'SiteFunction'; functionRoute: string }>;
  };
  allSitePage: {
    __typename?: 'SitePageConnection';
    nodes: Array<{ __typename?: 'SitePage'; path: string }>;
  };
};

export type BlogIndexPageQueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;

export type BlogIndexPageQuery = {
  __typename?: 'Query';
  allMarkdownRemark: {
    __typename?: 'MarkdownRemarkConnection';
    edges: Array<{
      __typename?: 'MarkdownRemarkEdge';
      node: {
        __typename?: 'MarkdownRemark';
        id: string;
        excerpt?: Maybe<string>;
        timeToRead?: Maybe<number>;
        fields?: Maybe<{
          __typename?: 'MarkdownRemarkFields';
          path?: Maybe<string>;
          slug?: Maybe<string>;
        }>;
        frontmatter?: Maybe<{
          __typename?: 'MarkdownRemarkFrontmatter';
          date?: Maybe<any>;
          title?: Maybe<string>;
        }>;
      };
    }>;
  };
};

export type BlogPostPageQueryVariables = Exact<{
  path: Scalars['String'];
}>;

export type BlogPostPageQuery = {
  __typename?: 'Query';
  markdownRemark?: Maybe<{
    __typename?: 'MarkdownRemark';
    excerpt?: Maybe<string>;
    html?: Maybe<string>;
    timeToRead?: Maybe<number>;
    fields?: Maybe<{
      __typename?: 'MarkdownRemarkFields';
      path?: Maybe<string>;
      slug?: Maybe<string>;
    }>;
    frontmatter?: Maybe<{
      __typename?: 'MarkdownRemarkFrontmatter';
      date?: Maybe<any>;
      tags?: Maybe<Array<Maybe<string>>>;
      title?: Maybe<string>;
    }>;
  }>;
};

export type TagCloudQueryVariables = Exact<{ [key: string]: never }>;

export type TagCloudQuery = {
  __typename?: 'Query';
  allMarkdownRemark: {
    __typename?: 'MarkdownRemarkConnection';
    edges: Array<{
      __typename?: 'MarkdownRemarkEdge';
      node: {
        __typename?: 'MarkdownRemark';
        frontmatter?: Maybe<{
          __typename?: 'MarkdownRemarkFrontmatter';
          tags?: Maybe<Array<Maybe<string>>>;
        }>;
      };
    }>;
  };
};

export type TagPageQueryVariables = Exact<{
  tag?: Maybe<Scalars['String']>;
}>;

export type TagPageQuery = {
  __typename?: 'Query';
  allMarkdownRemark: {
    __typename?: 'MarkdownRemarkConnection';
    totalCount: number;
    edges: Array<{
      __typename?: 'MarkdownRemarkEdge';
      node: {
        __typename?: 'MarkdownRemark';
        id: string;
        excerpt?: Maybe<string>;
        timeToRead?: Maybe<number>;
        fields?: Maybe<{
          __typename?: 'MarkdownRemarkFields';
          path?: Maybe<string>;
          slug?: Maybe<string>;
          tags?: Maybe<Array<Maybe<string>>>;
        }>;
        frontmatter?: Maybe<{
          __typename?: 'MarkdownRemarkFrontmatter';
          date?: Maybe<any>;
          title?: Maybe<string>;
        }>;
      };
    }>;
  };
};

export type BookCoverQueryVariables = Exact<{ [key: string]: never }>;

export type BookCoverQuery = {
  __typename?: 'Query';
  placeholderImage?: Maybe<{
    __typename?: 'File';
    childImageSharp?: Maybe<{
      __typename?: 'ImageSharp';
      gatsbyImageData: any;
    }>;
  }>;
};

export type AboutQueryVariables = Exact<{ [key: string]: never }>;

export type AboutQuery = {
  __typename?: 'Query';
  allClientsJson: {
    __typename?: 'ClientsJsonConnection';
    edges: Array<{
      __typename?: 'ClientsJsonEdge';
      node: {
        __typename?: 'ClientsJson';
        name?: Maybe<string>;
        url?: Maybe<string>;
        logo?: Maybe<{
          __typename?: 'File';
          extension: string;
          publicURL?: Maybe<string>;
          childImageSharp?: Maybe<{
            __typename?: 'ImageSharp';
            gatsbyImageData: any;
          }>;
        }>;
      };
    }>;
  };
  allMediaJson: {
    __typename?: 'MediaJsonConnection';
    edges: Array<{
      __typename?: 'MediaJsonEdge';
      node: {
        __typename?: 'MediaJson';
        name?: Maybe<string>;
        url?: Maybe<string>;
        logo?: Maybe<{
          __typename?: 'File';
          extension: string;
          publicURL?: Maybe<string>;
          childImageSharp?: Maybe<{
            __typename?: 'ImageSharp';
            gatsbyImageData: any;
          }>;
        }>;
      };
    }>;
  };
};

export type WelcomeQueryVariables = Exact<{ [key: string]: never }>;

export type WelcomeQuery = {
  __typename?: 'Query';
  allMarkdownRemark: {
    __typename?: 'MarkdownRemarkConnection';
    edges: Array<{
      __typename?: 'MarkdownRemarkEdge';
      node: { __typename?: 'MarkdownRemark'; html?: Maybe<string> };
    }>;
  };
};

export type SiteTitleQueryQueryVariables = Exact<{ [key: string]: never }>;

export type SiteTitleQueryQuery = {
  __typename?: 'Query';
  site?: Maybe<{
    __typename?: 'Site';
    siteMetadata?: Maybe<{
      __typename?: 'SiteSiteMetadata';
      author?: Maybe<string>;
      description?: Maybe<string>;
      keywords?: Maybe<string>;
      title?: Maybe<string>;
      navLinks?: Maybe<
        Array<
          Maybe<{
            __typename?: 'SiteSiteMetadataNavLinks';
            name?: Maybe<string>;
            link?: Maybe<string>;
            target?: Maybe<string>;
          }>
        >
      >;
    }>;
  }>;
};

export type ProfilePhotoQueryVariables = Exact<{ [key: string]: never }>;

export type ProfilePhotoQuery = {
  __typename?: 'Query';
  profilePhoto?: Maybe<{
    __typename?: 'File';
    childImageSharp?: Maybe<{
      __typename?: 'ImageSharp';
      gatsbyImageData: any;
    }>;
  }>;
};

export type SeoQueryVariables = Exact<{ [key: string]: never }>;

export type SeoQuery = {
  __typename?: 'Query';
  site?: Maybe<{
    __typename?: 'Site';
    siteMetadata?: Maybe<{
      __typename?: 'SiteSiteMetadata';
      author?: Maybe<string>;
      description?: Maybe<string>;
      siteUrl?: Maybe<string>;
      title?: Maybe<string>;
    }>;
  }>;
};

export type HeadingQueryQueryVariables = Exact<{ [key: string]: never }>;

export type HeadingQueryQuery = {
  __typename?: 'Query';
  site?: Maybe<{
    __typename?: 'Site';
    siteMetadata?: Maybe<{
      __typename?: 'SiteSiteMetadata';
      social?: Maybe<{
        __typename?: 'SiteSiteMetadataSocial';
        facebook?: Maybe<string>;
        gscholar?: Maybe<string>;
        instagram?: Maybe<string>;
        linkedin?: Maybe<string>;
        researchGate?: Maybe<string>;
        twitch?: Maybe<string>;
        twitter?: Maybe<string>;
        youtube?: Maybe<string>;
      }>;
    }>;
  }>;
};

export type AboutPageQueryVariables = Exact<{ [key: string]: never }>;

export type AboutPageQuery = {
  __typename?: 'Query';
  allMdx: {
    __typename?: 'MdxConnection';
    edges: Array<{
      __typename?: 'MdxEdge';
      node: { __typename?: 'Mdx'; body: string };
    }>;
  };
};

export type BooksPageQueryVariables = Exact<{ [key: string]: never }>;

export type BooksPageQuery = {
  __typename?: 'Query';
  allMarkdownRemark: {
    __typename?: 'MarkdownRemarkConnection';
    edges: Array<{
      __typename?: 'MarkdownRemarkEdge';
      node: {
        __typename?: 'MarkdownRemark';
        id: string;
        html?: Maybe<string>;
        fields?: Maybe<{
          __typename?: 'MarkdownRemarkFields';
          path?: Maybe<string>;
          slug?: Maybe<string>;
        }>;
        frontmatter?: Maybe<{
          __typename?: 'MarkdownRemarkFrontmatter';
          date?: Maybe<any>;
          subtitle?: Maybe<string>;
          title?: Maybe<string>;
          cover?: Maybe<{
            __typename?: 'File';
            extension: string;
            publicURL?: Maybe<string>;
            childImageSharp?: Maybe<{
              __typename?: 'ImageSharp';
              gatsbyImageData: any;
            }>;
          }>;
          productId?: Maybe<{
            __typename?: 'MarkdownRemarkFrontmatterProductId';
            amazon?: Maybe<string>;
            indiebound?: Maybe<string>;
          }>;
          reviews?: Maybe<
            Array<
              Maybe<{
                __typename?: 'MarkdownRemarkFrontmatterReviews';
                author?: Maybe<string>;
                authorTitle?: Maybe<string>;
                text?: Maybe<string>;
              }>
            >
          >;
        }>;
      };
    }>;
  };
};

export type HomePageQueryVariables = Exact<{ [key: string]: never }>;

export type HomePageQuery = {
  __typename?: 'Query';
  booksQuery: {
    __typename?: 'MarkdownRemarkConnection';
    edges: Array<{
      __typename?: 'MarkdownRemarkEdge';
      node: {
        __typename?: 'MarkdownRemark';
        excerpt?: Maybe<string>;
        id: string;
        fields?: Maybe<{
          __typename?: 'MarkdownRemarkFields';
          path?: Maybe<string>;
          slug?: Maybe<string>;
        }>;
        frontmatter?: Maybe<{
          __typename?: 'MarkdownRemarkFrontmatter';
          date?: Maybe<any>;
          subtitle?: Maybe<string>;
          title?: Maybe<string>;
          cover?: Maybe<{
            __typename?: 'File';
            extension: string;
            publicURL?: Maybe<string>;
            childImageSharp?: Maybe<{
              __typename?: 'ImageSharp';
              gatsbyImageData: any;
            }>;
          }>;
        }>;
      };
    }>;
  };
};

export type PressPageQueryVariables = Exact<{ [key: string]: never }>;

export type PressPageQuery = {
  __typename?: 'Query';
  allAudioJson: {
    __typename?: 'AudioJsonConnection';
    edges: Array<{
      __typename?: 'AudioJsonEdge';
      node: {
        __typename?: 'AudioJson';
        id: string;
        source?: Maybe<string>;
        title?: Maybe<string>;
        url?: Maybe<string>;
      };
    }>;
  };
  allPrintJson: {
    __typename?: 'PrintJsonConnection';
    edges: Array<{
      __typename?: 'PrintJsonEdge';
      node: {
        __typename?: 'PrintJson';
        id: string;
        source?: Maybe<string>;
        title?: Maybe<string>;
        url?: Maybe<string>;
      };
    }>;
  };
  allVideoJson: {
    __typename?: 'VideoJsonConnection';
    edges: Array<{
      __typename?: 'VideoJsonEdge';
      node: {
        __typename?: 'VideoJson';
        id: string;
        source?: Maybe<string>;
        title?: Maybe<string>;
        url?: Maybe<string>;
      };
    }>;
  };
};

export type CvPageQueryVariables = Exact<{ [key: string]: never }>;

export type CvPageQuery = {
  __typename?: 'Query';
  awardsQuery: {
    __typename?: 'MarkdownRemarkConnection';
    edges: Array<{
      __typename?: 'MarkdownRemarkEdge';
      node: {
        __typename?: 'MarkdownRemark';
        id: string;
        html?: Maybe<string>;
        frontmatter?: Maybe<{
          __typename?: 'MarkdownRemarkFrontmatter';
          date?: Maybe<any>;
        }>;
      };
    }>;
  };
};
