
import React, { useEffect, useRef, useState } from 'react'


export const Tile = ({ src }) => {
    return (
        <div className="tile" style={{ backgroundImage: `url("${src}")`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 5 }}></div>
    );
};

export const Masonry = ({ brakePoints, children }) => {
    const [columns, setColumns] = useState(1);
    const ref = useRef();
    useEffect(() => {
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize)
    }, [])


    const getColumns = (w) => {
        return brakePoints.reduceRight((p, c, i) => {
            return c < w ? p : i;
        }, brakePoints.length) + 1;
    }

    const onResize = () => {
        const cols = getColumns(ref.current.offsetWidth);
        if (cols !== columns) {
            setColumns(cols)
        }

    }

    const mapChildren = () => {
        let col = [];
        const numC = columns;
        for (let i = 0; i < numC; i++) {
            col.push([]);
        }
        return children.reduce((p, c, i) => {
            p[i % numC].push(c);
            return p;
        }, col);
    }


    return (
        <div className="masonry" ref={ref}>
            {mapChildren().map((col, ci) => {
                return (
                    <div className="column" key={ci} >

                        {col.map((child, i) => {
                            return <div key={i} >{child}</div>
                        })}

                        {col.map((child, i) => {
                            return <div key={i + 'shadow'}>{child}</div>
                        })}
                    </div>
                )
            })}
        </div>
    )

}


