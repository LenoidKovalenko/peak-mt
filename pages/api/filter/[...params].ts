// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PostType } from '../../../types'
import * as data from "../../../data/blog.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostType[]>
) {
    const { params } = req.query;
    if(params) {
        const result = data.posts.filter((item) => {
            return (item.categories.indexOf(parseInt(params[0])) !== -1);
        })
        if(parseInt(params[0]) === 0) res.status(200).json(data.posts); 
        else res.status(200).json(result);
    }
}
