const Account = () => {
  const info = JSON.parse(localStorage.getItem("userInfo")) || []; // Ensure it's an array even if null
  const items = JSON.parse(localStorage.getItem("orders"));
  console.log(items);
  return (
    <main className="px-10">
      {info.map((v, index) => (
        <div
          key={index}
          className="mb-4 w-[450px] p-3 border-black border rounded-lg border-solid "
        >
          {Object.entries(v).map(([key, value]) => (
            <div key={key} className="flex gap-2">
              <h1 className="font-bold uppercase">{key} : </h1>
              <p>{value}</p>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
};

export default Account;
