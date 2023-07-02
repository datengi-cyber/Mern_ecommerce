

export default function Recommended({datas,Cards}) {
  return (
    <>
      <div className="recommended-section section-spacing">
        <div className="max-width">
          <h1 className="heading center">Recommended-books</h1>
          <div className="grid">
            {datas.filter((data) => data.rating === 5).slice(0,4)
              .map((data) => <Cards key={data.id} items={data} />)}
          </div>
        </div>
      </div>
    </>
  );
}



