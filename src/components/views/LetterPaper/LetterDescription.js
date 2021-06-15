import React from 'react'

function LetterDescription(props) {
    const [Description, setDescription] = React.useState([]);
    React.useEffect(() => {
        if(props.detail.description){
            let description = [];
            description.push(props.detail.description)
            setDescription(description);
        }
    }, [props.detail])

    return (
        <div>
            <div className="detail-description">{Description}</div>
        </div>
    )
    }


export default LetterDescription
