export interface FeedProps {
  children?: React.ReactNode;
  classNames?: string;
}

const Feed: React.FunctionComponent<FeedProps> = (props) => {
  return <aside className={`${props.classNames}`}>{props.children}</aside>;
};

export default Feed;
