
exports.getUser = async (req, res)=>{
    try {
        res.json([
            {id: 1, name: 'Plamedi Pindi'}
        ]);

    } catch (error) {
        res.status(500).json({ error: 'Error on getting users'});
    }
};