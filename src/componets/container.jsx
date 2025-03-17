import { useAppContent } from "pocketbase-react";
import { useEffect } from "react";
import Bulletin from "./bulletin";

function BulletinContainer() {
  const { records, actions } = useAppContent("secrets", true);

  useEffect(() => {
    actions.subscribe();

    return () => {
      actions.unsubscribe();
    };
  }, []);

  return (
    <>
      {records?.map((record) => (
        <Bulletin text={record.message} />
      ))}
      <Bulletin />
    </>
  );
}

export default BulletinContainer;
