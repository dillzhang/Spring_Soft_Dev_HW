from flask import Flask, render_template, request
import json
import utils
# from functools import wraps
import debug

app = Flask(__name__)


@app.route('/')
@app.route('/home')
@debug.metaFunc
# @wraps
def home():
    return render_template("home.html")


@app.route('/update')
@debug.metaFunc
# @wraps
def update():
    information = utils.getInfo()
    return json.dumps(information)


@app.route('/search')
# @debug.metaFunc
# @wraps
def search():
    stock = request.args.get("stockTicker")
    investment = request.args.get("initialInvestment")
    information = utils.getReturn(stock, investment)
    return json.dumps(information)


if __name__ == "__main__":
    app.debug = True
    app.secret_key = utils.secret_key
    app.run('0.0.0.0', port=8000)
