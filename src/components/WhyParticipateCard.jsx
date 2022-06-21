const WhyParticipateCard = ({ item }) => {
  return (
    <div className="break-inside mb-4 p-8 bg-custom-light/5 rounded-sm space-y-4 border border-transparent hover:border-custom-light hover:rotate-1 cursor-pointer">
      <h4>{item.icon}</h4>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  );
};

export default WhyParticipateCard;
