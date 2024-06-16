type MainContentsAreaProps = {
  filter?: JSX.Element;
  sort?: JSX.Element;
  contents: JSX.Element; // contents 속성은 필수로 전달되어야 함
};

function MainContentsArea({ filter, sort, contents }: MainContentsAreaProps) {
  return (
    <div className="flex flex-wrap justify-center min-h-screen h-relative bg-green-50">
      {filter && filter}
      <div className="mx-auto">
        {sort && sort}
        {contents}
      </div>
    </div>
  );
}

export default MainContentsArea;
