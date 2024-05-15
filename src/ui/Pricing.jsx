export default function Pricing({ price }) {
    return (
        <>
            <div className="price-container">
                <p className="original-price">{price ? `$${price.toFixed(2)}` : ''}</p>
            </div>
        </>
    )
}
