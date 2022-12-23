// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PostType } from '../../types'
import * as data from "../../data/blog.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostType[]>
) {
  res.status(200).json(data.posts)
}
