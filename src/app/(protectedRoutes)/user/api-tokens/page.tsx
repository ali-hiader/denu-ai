"use client";
import CustomCheckbox from "@/components/apiComponents/checkbox";
import ApiDialog from "@/components/user/api-dialog";
import TokenItem from "@/components/user/token-item";
import { FormEvent, useState } from "react";

function ApiTokenpage() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [tokenList, setTokenList] = useState<
    { input: string; premission: string | null }[]
  >([]);

  function createToken(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const permission = formData.get("permission");

    if (inputValue.length === 0) {
      setError("Token name is required");
      return;
    }

    setTokenList((prev) => [
      ...prev,
      {
        input: inputValue,
        premission: permission ? (permission as string) : null,
      },
    ]);
  }

  function deleteToken(index: number) {
    setTokenList((prev) => prev.filter((_, i) => i !== index));
  }

  function updatePermission(index: number, permission: string | null) {
    console.log(index, permission);
    setTokenList((prev) =>
      prev.map((t, i) => (i === index ? { ...t, premission: permission } : t))
    );
  }

  return (
    <>
      <header className=" shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl mt-10 font-semibold text-white text-left">
            API Tokens
          </h2>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-1 sm:px-6 lg:px-8 h-full">
        <div>
          <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <div>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1 flex justify-between">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium text-white">
                      Create API Token
                    </h3>

                    <p className="mt-1 text-sm text-gray-300">
                      API tokens allow third-party services to authenticate with
                      our application on your behalf.
                    </p>
                  </div>

                  <div className="px-4 sm:px-0"></div>
                </div>

                <div className="mt-5 md:mt-0 md:col-span-2 ">
                  <form onSubmit={createToken}>
                    <div className="px-4 py-5 backdrop-blur-[20px] bg-white/[2%] sm:p-6 shadow-inner-xl shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20 rounded-xl shadow-[inset_0_0_8px_2px_rgba(179,83,235,0.4),inset_0_0_2px_rgba(255,255,255,0.2)]">
                      <div className="grid grid-cols-6 gap-6 text-white">
                        <div className="col-span-6 sm:col-span-4">
                          <label
                            className="block font-medium text-sm text-white"
                            htmlFor="name"
                          >
                            Token Name
                          </label>
                          <input
                            className="mt-1 block w-3/4 bg-white/[6%] text-white border-white/20 focus:border-white/20 focus:ring-white/90 rounded-lg shadow-inner-md px-4 py-2 ring-1 ring-white/20"
                            id="name"
                            type="text"
                            autoFocus
                            onChange={(e) => setInputValue(e.target.value)}
                          />
                          {error && (
                            <p className="text-sm text-red-600 mt-2">{error}</p>
                          )}
                        </div>

                        <div className="col-span-6">
                          <label
                            className="block font-medium text-sm text-white"
                            htmlFor="permissions"
                          >
                            Permissions
                          </label>

                          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="flex items-center">
                              <CustomCheckbox
                                name="Generate"
                                checkboxName="permission"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-start mt-4">
                        <div className="hidden text-sm text-white me-3">
                          Created.
                        </div>
                        {inputValue.length !== 0 ? (
                          <ApiDialog>
                            <button
                              type="submit"
                              className="rounded-lg flex gap-2.5 justify-center items-center relative h-full w-auto  bg-transparent  text-md hover:cursor-pointer text-center bg-gradient-to-b from-[#B353EB]/20 to-[#B353EB]/40 shadow-inner-lg shadow-[#B353EB]/40 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg"
                            >
                              <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-lg h-full w-full justify-center items-center text-white">
                                Create
                              </div>
                            </button>
                          </ApiDialog>
                        ) : (
                          <button
                            type="submit"
                            className="rounded-lg flex gap-2.5 justify-center items-center relative h-full w-auto  bg-transparent  text-md hover:cursor-pointer text-center bg-gradient-to-b from-[#B353EB]/20 to-[#B353EB]/40 shadow-inner-lg shadow-[#B353EB]/40 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg"
                          >
                            <div className="ring-inset ring-[1px] ring-white/20 px-4 py-2 flex gap-2.5 rounded-lg h-full w-full justify-center items-center text-white">
                              Create
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {tokenList.length > 0 && (
                <>
                  <div className="hidden sm:block">
                    <div className="py-8">
                      <div className="border-t border-gray-200"></div>
                    </div>
                  </div>

                  {/* Manage Api Token */}
                  <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1 flex justify-between">
                      <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium text-white">
                          Manage API Tokens
                        </h3>

                        <p className="mt-1 text-sm text-gray-300">
                          You may delete any of your existing tokens if they are
                          no longer needed.
                        </p>
                      </div>

                      <div className="px-4 sm:px-0"></div>
                    </div>

                    <div className="mt-5 md:mt-0 md:col-span-2 ">
                      <form>
                        <div className="px-4 py-5 backdrop-blur-[20px] bg-white/[2%] sm:p-6 shadow-inner-xl shadow-[#B353EB]/80 ring-inset ring-[1px] ring-white/20 rounded-xl shadow-[inset_0_0_8px_2px_rgba(179,83,235,0.4),inset_0_0_2px_rgba(255,255,255,0.2)]">
                          <div className="space-y-6">
                            {tokenList.map((token, i) => (
                              <TokenItem
                                key={token.input}
                                token={token}
                                deleteFn={deleteToken}
                                updatePermission={updatePermission}
                                index={i}
                              />
                            ))}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApiTokenpage;
