import AnimationWrapper from './AnimationWrapper';

const BenefitCard = ({ benefit, index }) => {
  return (
    <AnimationWrapper animation="fade-up" delay={index * 150}>
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
        <div className="text-4xl mb-4">{benefit.icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
      </div>
    </AnimationWrapper>
  );
};

export default BenefitCard;