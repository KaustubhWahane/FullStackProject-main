import './Loader.css'; 

export default function LoaderComponent() {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="dot-spinner">
        <div className="dot-spinner__dot rotate-[0deg]">
          <span className="block rounded-full bg-richChocolate h-[20%] w-[20%] transform scale-0 opacity-50 animate-pulse0112"></span>
        </div>
        <div className="dot-spinner__dot rotate-[45deg]">
          <span className="block rounded-full bg-richChocolate h-[20%] w-[20%] transform scale-0 opacity-50 animate-pulse0112" style={{ animationDelay: 'calc(var(--uib-speed) * -0.875)' }}></span>
        </div>
        <div className="dot-spinner__dot rotate-[90deg]">
          <span className="block rounded-full bg-richChocolate h-[20%] w-[20%] transform scale-0 opacity-50 animate-pulse0112" style={{ animationDelay: 'calc(var(--uib-speed) * -0.75)' }}></span>
        </div>
        <div className="dot-spinner__dot rotate-[135deg]">
          <span className="block rounded-full bg-richChocolate h-[20%] w-[20%] transform scale-0 opacity-50 animate-pulse0112" style={{ animationDelay: 'calc(var(--uib-speed) * -0.625)' }}></span>
        </div>
        <div className="dot-spinner__dot rotate-[180deg]">
          <span className="block rounded-full bg-richChocolate h-[20%] w-[20%] transform scale-0 opacity-50 animate-pulse0112" style={{ animationDelay: 'calc(var(--uib-speed) * -0.5)' }}></span>
        </div>
        <div className="dot-spinner__dot rotate-[225deg]">
          <span className="block rounded-full bg-richChocolate h-[20%] w-[20%] transform scale-0 opacity-50 animate-pulse0112" style={{ animationDelay: 'calc(var(--uib-speed) * -0.375)' }}></span>
        </div>
        <div className="dot-spinner__dot rotate-[270deg]">
          <span className="block rounded-full bg-richChocolate h-[20%] w-[20%] transform scale-0 opacity-50 animate-pulse0112" style={{ animationDelay: 'calc(var(--uib-speed) * -0.25)' }}></span>
        </div>
        <div className="dot-spinner__dot rotate-[315deg]">
          <span className="block rounded-full bg-richChocolate h-[20%] w-[20%] transform scale-0 opacity-50 animate-pulse0112" style={{ animationDelay: 'calc(var(--uib-speed) * -0.125)' }}></span>
        </div>
      </div>
    </div>
  );
}
