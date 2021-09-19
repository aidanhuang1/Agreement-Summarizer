import React, { Component } from "react";

class App extends Component {
  state = {
    visible: true,
    whichComponentToShow: "notfinished",
    info: "",
  };

  render() {
    if (this.state.whichComponentToShow === "notfinished") {
      return (
        <div className="mt-20 w-full max-w-xl">
          <form
            action="/"
            methods="post"
            className="bg-white shadow-md rounded px-8 pt-6 pb-2 mb-4"
          >
            <div className="relative inline-flex m-4">
             
              <select class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                <option>Choose Company</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Black</option>
                <option>Orange</option>
                <option>Purple</option>
                <option>Gray</option>
                <option>White</option>
              </select>
            </div>

            <div class="relative inline-flex">
                <select class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                <option># of sentences</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Black</option>
                <option>Orange</option>
                <option>Purple</option>
                <option>Gray</option>
                <option>White</option>
              </select>
            </div>

            <div>
              <label class="mr-20 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span class="mt-2 text-base leading-normal">Select a file</span>
                <input type="file" class="hidden" />
              </label>
            </div>

            <textarea
              type="text"
              rows="15"
              placeholder="Input"
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              onClick={() => {
                this.setState({ whichComponentToShow: "finished" });
              }}
            >
              Submit
            </button>
          </form>
          <div>
            <section class="text-gray-700">
              <div class="container px-5 py-24 mx-auto">
                <div class="text-center mb-20">
                  <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                    Frequently Asked Question
                  </h1>
                  <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    The most common questions about how our business works and
                    what can do for you.
                  </p>
                </div>
                <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                  <div class="w-full lg:w-1/2 px-4 py-2">
                    <details class="mb-4">
                      <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        How Long is this site live?
                      </summary>

                      <span>
                        Laboris qui labore cillum culpa in sunt quis sint
                        veniam. Dolore ex aute deserunt esse ipsum elit aliqua.
                        Aute quis minim velit nostrud pariatur culpa magna in
                        aute.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                        Can I install/upload anything I want on there?
                      </summary>

                      <span>
                        Laboris qui labore cillum culpa in sunt quis sint
                        veniam. Dolore ex aute deserunt esse ipsum elit aliqua.
                        Aute quis minim velit nostrud pariatur culpa magna in
                        aute.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        How can I migrate to another site?
                      </summary>

                      <span>
                        Laboris qui labore cillum culpa in sunt quis sint
                        veniam. Dolore ex aute deserunt esse ipsum elit aliqua.
                        Aute quis minim velit nostrud pariatur culpa magna in
                        aute.
                      </span>
                    </details>
                  </div>
                  <div class="w-full lg:w-1/2 px-4 py-2">
                    <details class="mb-4">
                      <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        Can I change the domain you give me?
                      </summary>

                      <span class="px-4 py-2">
                        Laboris qui labore cillum culpa in sunt quis sint
                        veniam. Dolore ex aute deserunt esse ipsum elit aliqua.
                        Aute quis minim velit nostrud pariatur culpa magna in
                        aute.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        How many sites I can create at once?
                      </summary>

                      <span class="px-4 py-2">
                        Laboris qui labore cillum culpa in sunt quis sint
                        veniam. Dolore ex aute deserunt esse ipsum elit aliqua.
                        Aute quis minim velit nostrud pariatur culpa magna in
                        aute.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        How can I communicate with you?
                      </summary>

                      <span class="px-4 py-2">
                        Laboris qui labore cillum culpa in sunt quis sint
                        veniam. Dolore ex aute deserunt esse ipsum elit aliqua.
                        Aute quis minim velit nostrud pariatur culpa magna in
                        aute.
                      </span>
                    </details>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    } else if (this.state.whichComponentToShow === "finished") {
      return (
        <div className="mt-20 w-full max-w-xl">
          <form
            action="/"
            methods="post"
            className="bg-white shadow-md rounded px-8 pt-6 pb-2 mb-4"
          >
            <textarea
              type="text"
              placeholder="Input"
              rows="15"
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <textarea
              type="text"
              placeholder="Input"
              rows="15"
              value="
              -You shall provide us with all necessary cooperation in relation to this Agreement and access to such information as may be required by us.
              -You shall use the API in accordance with the reasonable directions given by us from time to time.
              -We may offer to transfer the Service and associated Forum Data to the Forum User with the highest number of votes from other Forum Users in the poll.
              -Each party may be given access to Confidential Information from the other party in order to perform its obligations under these terms and conditions.
              -The poll will be accompanied and may be subsequently updated with information from us to Forum Users about the requirement for a new forum operator and the transfer process.
              -This Agreement shall commence on the Start Date and shall continue unless terminated in accordance with clause 4.2 or clause 19.
              -Each party shall take a back-up of its own Confidential Information and shall not be responsible to the other for any loss, destruction, alteration or disclosure of Confidential Information.
              -You may amend our precedent standard form terms of use, privacy policy and cookie policy as you believe is necessary."
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded object-center"
              onClick={() => {
                this.setState({ whichComponentToShow: "finished" });
              }}
            >
              Submit
            </button>
          </form>
        </div>
      );
    }
  }
}

export default App;
