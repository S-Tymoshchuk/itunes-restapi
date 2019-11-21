import React, {useState} from "react";
import "./style.css";
import ReactPaginate from 'react-paginate';
import {animateScroll as scroll} from 'react-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';

const BodyTable = (props) => {

    const [pageNumber, setPageNumber] = useState(0);
    const [displayClass, setDisplayClass] = useState({});
    const [flag, setFlag] = useState(true);

    const tracktime = (time) => {
        return Math.ceil(time / 60000).toFixed(2)
    };

    const addClass = (index) => {
        setFlag(!flag);
        setDisplayClass(index);

    };

    const getElements = (pageNumber, pageSize) => {
        let elements = [];
        let firstIndex = pageNumber * pageSize;
        let lastIndex = pageNumber * pageSize + pageSize;
        if (lastIndex >= props.data.length) lastIndex = props.data.length - 1;
        for (let i = firstIndex; i <= lastIndex; i++) {
            elements.push(props.data[i]);
        }
        return elements;
    };

    const handlePageClick = (data) => {
        let selected = data.selected;
        setPageNumber(selected);
        scroll.scrollToTop();
        setFlag(false);
    };

    return (
        <div>
            <div>
                <div className="container tableBackground">
                    <div></div>
                    <div>Artist</div>
                    <div>Track</div>
                    <div>Collection</div>
                    <div>Genre</div>
                    <div></div>
                </div>
                {
                    getElements(pageNumber, 7).map((data, index) => {
                        return (
                            <div key={index} className="bodyTable">
                                <div className="container">
                                    <div><img src={data.artworkUrl100} alt=""/></div>
                                    <div>{data.artistName}</div>
                                    <div>{data.trackName}</div>
                                    <div>{data.collectionName}</div>
                                    <div>{data.primaryGenreName}</div>
                                    <div>
                                        <button className={flag && displayClass === index ? "closed" : "close"}
                                                onClick={() => {
                                                    addClass(index);
                                                }} href="#"/>
                                    </div>
                                </div>
                                <div className={flag && displayClass === index ? "hidden" : "tableInfo"}>
                                    <div>
                                        <div className="tableInfo-music">
                                            <div></div>
                                            <h2>{data.collectionCensoredName}<FontAwesomeIcon icon={faMusic}/></h2>
                                        </div>
                                    </div>
                                    <div className="information">
                                        <div></div>
                                        <div>Collection: {data.collectionName}</div>
                                        <div>Track duration:{tracktime(data.trackTimeMillis)}</div>
                                    </div>
                                    <div className="information">
                                        <div></div>
                                        <div>Track Count: {data.trackCount}</div>
                                        <div>Track price: {data.trackPrice}</div>
                                    </div>
                                    <div className="information">
                                        <div></div>
                                        <div>Price:{data.collectionPrice}</div>
                                    </div>
                                </div>
                            </div>)
                    })
                }
                <div className={"padginationStyle"}>
                    <ReactPaginate
                        initialPage={0}
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={props.data.length / 7}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                </div>

            </div>
        </div>

    )
}

export default BodyTable;