import { useState, useEffect } from "react";
import { datas1 } from "../Api"; 
import Cards from "../components/Cards";

export default function MenProduct() {
    const [data1, setData] = useState(datas1); 
    const [searchTerm, setSearchTerm] = useState('');

    function onSearch(e) {
        const value = e.target.value;
        setSearchTerm(value);
    }

    useEffect(() => {
        const filterData = () => {
            if (searchTerm === "") {
                setData([...datas1]);
            } else {
                const filteredData = datas1.filter((item) =>
                    item.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setData(filteredData);
            }
        };

        const delay = 600;
        let timer = setTimeout(filterData, delay);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    function valueChange(e) {
        let value = e.target.value
        if (value === "High-To_Low") {
            setData(datas1.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)))
        }

        if (value === "Low-To-High") {
            setData(datas1.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)))
        }

        if (value === "Ratings") {
            setData(datas1.slice().sort((a, b) => b.rating - a.rating))
        }
    }

    return (
        <>
            <div className="products-container section-spacing">
                <div className="max-width">
                    <div className="row">
                        <h1 className="title">Male Product</h1>
                        <div className="filter-items">
                            <select id="select" defaultValue="default" onChange={valueChange}>
                                <option value="default" disabled>Sort By</option>
                                <option value="High-To_Low">High-To-Low</option>
                                <option value="Low-To-High">Low-To-High</option>
                                <option value="Ratings">Ratings</option>
                            </select>
                            <input type="search" className="search" placeholder=" Search Items Here" onChange={onSearch}></input>
                        </div>
                    </div>

                    {data.length === 0 ? (
                        <div className="grid">
                            <p>No matching result</p>
                        </div>
                    ) : (
                        <div className="grid">
                            {datas1.map((datas1) => <Cards key={datas1.id} items={datas1} />)}
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}
