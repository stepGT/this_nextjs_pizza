/**
 *
 */

interface Props {
  params: { id: string };
}

export default function ProductPage({ params: { id } }: Props) {
  return <div>{id}</div>;
}
