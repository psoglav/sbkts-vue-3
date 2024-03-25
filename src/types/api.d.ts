export type MetadataProperty = {
  attributes: { StringLengthAttribute: string; Nullable: 'true' | 'false' }
  Nullable: 'true' | 'false'
  StringLengthAttribute: string
  entityName: string
  entityType: 'String' | 'Int32'
  isEnum: false
  name: string
}

export type Metadata = {
  attributes: any
  entityName: string
  name: string
  properties: Record<string, MetadataProperty>
  quantity: number
}
