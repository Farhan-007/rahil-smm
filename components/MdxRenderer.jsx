// components/MDXRenderer.jsx
'use client';

import { MDXRemote } from 'next-mdx-remote';
import CustomImage from './CustomImage';
import CustomLink from './CustomLink';
import Head from 'next/head';

const components = {
  a: CustomLink,
  img: CustomImage,
  Head,
};

export default function MDXRenderer({ mdxSource }) {
  return <MDXRemote {...mdxSource} components={components} />;
}
