const FallingCoffeeBeans = () => {
  const beans = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${8 + Math.random() * 4}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {beans.map((bean) => (
        <div
          key={bean.id}
          className="absolute w-2 h-3 bg-gradient-to-b from-gold/40 to-gold/20 rounded-full animate-fall"
          style={{
            left: bean.left,
            animationDelay: bean.delay,
            animationDuration: bean.duration,
          }}
        />
      ))}
    </div>
  );
};

export default FallingCoffeeBeans;
