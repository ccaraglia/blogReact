const React = require('react'),
	ReactDOM = require('react-dom')

const app = function() {

	var HomeContainer = React.createClass({
		render: function() {
            return (
                    <div id="homeContainer">
                    <Header />
                    <ContainerInside />
                    <NeverMiss />

                </div>
                )
		}
    })


var Header = React.createClass({
        render: function() {
            return (
                    <div id="header">
                    <img id="houston" src="http://magentanova.github.io/html-intro-1/images/houston.jpg" />
                    <img id="logo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" />
                    </div>

            )
    }

})

var ContainerInside = React.createClass({
        render: function() {
            return (
                    <div id="containerInside">

                        <div className="colLeft">
                            <p><strong>THE IRON YARD HOUSTON</strong></p>
                            <p id="greyPart"> Happenings and updates from the Iron Yard in Houston, TX </p>
                            <hr width="100%" align="center" color="#ABB7B7" />
                            <p id="greyPart"> SEARCH </p>
                            <input type="text" placeholder="Search Keywords" required />
                        </div>
                        <div className="colRight">
                        <h1>September 22 Starts a New Class of the Iron Yard Houston Students</h1>
                        <p><i>By Brian Dorton, campus director at <a HREF="http://www.theironyard.com">The Iron Yard</a> Houston</i></p>
                        <img id="classroom" src="http://magentanova.github.io/html-intro-1/images/classroom.jpg" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum voluptatibus temporibus quaerat quasi ipsam nemo quae minus quos possimus officiis. Et eligendi nesciunt maxime dolores eaque omnis enim iure aliquid.</p>
                        </div>

                    </div>
                )

        }

})

var NeverMiss = React.createClass({
        render: function(){
            return (

                    <div id="neverMiss">

                            <div id="neverMiss1-2">
                                <p><b>Never miss a post!</b></p>
                            </div>

                            <div id="neverMiss2-2">
                                <div className="follow_logo">
                                    <img id="neverMissLogo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" />
                                </div>

                                <div className="follow_txt">
                                    <p><strong> tiyhouston </strong></p><p id="greyPart">The Iron Yard Houston</p>
                                </div>

                                <div className="follow_btn">
                                    <button>+ Follow </button>
                                </div>

                            </div>

                    </div>

            )


        }


})






ReactDOM.render(<HomeContainer />, document.querySelector('.container'))
}








app()