
export  default  function Discounted({datas,Cards}){
    return(
        <>
        <div className = "discounted-container section-spacing">
        <div className="max-width">
          <h1 className="heading center">Discounted Books</h1>
          <div className="grid">
            {datas.filter((data) => data.salePrice).slice(0,4)
              .map((data) => <Cards key={data.id} items={data} />)}
          </div>
        </div>
        </div>
        </>
    )
}