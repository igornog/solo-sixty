import NavBar from '../Navbar/Navbar';
import Header from '../Header/Header';

const Layout: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className={`flex gap-8 h-screen w-screen bg-white text-black`}>
      <NavBar />
      <div className="flex flex-col w-[inherit]">
        <Header />
        <div className="h-full overflow-hidden">{props.children}</div>
      </div>
    </div>
  );
};

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export default Layout;
