import coffeeBean1 from "@/assets/coffee-bean-1.png";
import coffeeBean2 from "@/assets/coffee-bean-2.png";
import coffeeBean3 from "@/assets/coffee-bean-3.png";

const FallingCoffeeBeans = () => {
  const beanImages = [coffeeBean1, coffeeBean2, coffeeBean3];
  
  const beans = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    image: beanImages[i % 3],
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${8 + Math.random() * 4}s`,
    size: 40 + Math.random() * 30,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {beans.map((bean) => (
        <img
          key={bean.id}
          src={bean.image}
          alt=""
          className="absolute animate-fall opacity-30"
          style={{
            left: bean.left,
            animationDelay: bean.delay,
            animationDuration: bean.duration,
            width: `${bean.size}px`,
            height: `${bean.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingCoffeeBeans;
