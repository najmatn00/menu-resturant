const CartOrder = () => {
    return (
        <div className="flex border-2 border-orange-300 bg-white rounded-2xl h-24 items-center ">
            <div className="flex w-1/2 flex-col items-start ml-4 gap-2">
                <h1 className="text-xl">#12b54</h1>
                <p className="text-xs">show more</p>
            </div>
            <div className="flex flex-col items-end mr-4 w-1/2 gap-2">
                <p >13:30</p>
                <h1 className=" text-xl">22$</h1>
            </div>
        </div>
      );
}
 
export default CartOrder;