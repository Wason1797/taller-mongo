var Brand = require('../model/brand');
exports.index = function (req, res) {
    Brand.find(function (err, brands) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Brands retrieved successfully",
            data: brands
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

exports.view = function (req, res) {
    Brand.findById(req.params.codeBrand, function (err, brand) {
        if (err)    
            res.send(err);
        res.json({
            message: 'Brand details loading..',
            data: brand
        });
    });
};
// 