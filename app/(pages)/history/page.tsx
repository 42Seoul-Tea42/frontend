import FancyHistory from '../fancy/components/FancyHistory';

const History = () => {
  return (
    <FancyHistory
      color1="bg-yellow-300"
      color1Description="나를 조회한 유저"
      color2="bg-sky-300"
      color2Description="내가 조회한 유저"
    />
  );
};

export default History;
