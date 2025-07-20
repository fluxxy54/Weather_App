function Card() {
  return (
    <>
      <div className="  place-content-between rounded-2xl p-3 bg-indigo-100 w-40  border-2 border-amber-600">
        <div className="flex"> date</div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
          className="w-15 h-15 m-2"
        ></img>
        <div className="flex gap-3 ">
          <div className="text-2xl">High</div>
          <div className="items-end">Low </div>
        </div>
      </div>
    </>
  );
}
export default Card;
