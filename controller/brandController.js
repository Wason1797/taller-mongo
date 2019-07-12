Brand = require('../model/brand');
exports.index = function (req, res) {
    Brand.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var brand = new Brand();
    brand.name = req.body.name;
    brand.codeBrand = req.body.codeBrand;
// save the contact and check for errors
    brand.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New brand created!',
            data: brand
        });
    });
};