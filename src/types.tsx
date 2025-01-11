export type Bucket = {
  id: number,
  name: string,
  description: string,
  createdAt: Date,
  tokens: Token[],
  tokenType: string,
};

export type Token = {
  bucket_id: number,
  percentage: number
}

