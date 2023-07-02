export default function Pricing({ salePrice, originalPrice }) {
    return (
        <>
            <div className="price-container">
                {
                    salePrice ?
                        <>
                            <p className="sale-price ">${salePrice.toFixed(2)}</p>
                            <p className="original-price">${originalPrice.toFixed(2)}</p>
                        </>
                        : <>  ${originalPrice.toFixed(2)}</>
                }
            </div>
        </>
    )
}