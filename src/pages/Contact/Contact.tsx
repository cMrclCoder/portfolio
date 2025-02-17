import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="flex p-10 items-center">
          <div className="flex flex-col">
            <h1 className="text-3xl">
              MY <span className="text-green-400">MOBILE</span> PHONE :
            </h1>
            <p className="text-2xl mb-10 text-green-600">0819-3360-3280</p>
            <h1 className="text-3xl">
              MY <span className="text-green-400">EMAIL</span> :
            </h1>
            <p className="text-2xl mb-10 text-green-600">
              marcel.wang07@gmail.com
            </p>
          </div>
          <div className="ml-50">
            <img src="images/me.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
