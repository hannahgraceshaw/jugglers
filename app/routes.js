const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


router.post("/jugglingballs-answer", function(request, response){
var jugglingballs = request.session.data['jugglingballs']


if (jugglingballs == 'One or two' || jugglingballs == "None. I can't juggle."){
  response.redirect('/ineligible')
}

else {
  response.redirect('/jugglingtricks')}

})

module.exports = router
