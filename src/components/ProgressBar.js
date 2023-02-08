const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 20,
        width: '100%',
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        width: '100%',
        height: 47,
        top: 1,
        backgroundColor: '#E0E0E2',
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        textAlign: 'right',
        transition: 'width 1s ease-in-out'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        float: 'left'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;