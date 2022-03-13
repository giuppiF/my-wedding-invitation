import Confirm from "./confirm";

export default function Timeline() {
  return (
    <div className="pt-10  sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden bg-green-800 ">
      <div className="mx-auto max-w-7xl px-8">
        <div className="">
          <div className="flex" id="cosa">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-16 h-16 border rounded-full">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.16 5.00004C19.0999 3.93725 17.6948 3.28858 16.1983 3.17121C14.7018 3.05384 13.2127 3.47551 12 4.36004C10.7276 3.41368 9.14396 2.98455 7.56789 3.15908C5.99182 3.33361 4.54041 4.09882 3.50594 5.30063C2.47148 6.50244 1.93079 8.05156 1.99277 9.63606C2.05475 11.2206 2.71479 12.7227 3.83997 13.84L10.05 20.06C10.57 20.5718 11.2704 20.8587 12 20.8587C12.7296 20.8587 13.43 20.5718 13.95 20.06L20.16 13.84C21.3275 12.6653 21.9829 11.0763 21.9829 9.42004C21.9829 7.76377 21.3275 6.17478 20.16 5.00004ZM18.75 12.46L12.54 18.67C12.4693 18.7414 12.3852 18.798 12.2925 18.8367C12.1998 18.8753 12.1004 18.8953 12 18.8953C11.8995 18.8953 11.8001 18.8753 11.7074 18.8367C11.6147 18.798 11.5306 18.7414 11.46 18.67L5.24997 12.43C4.46573 11.6284 4.02658 10.5515 4.02658 9.43004C4.02658 8.30858 4.46573 7.2317 5.24997 6.43004C6.04913 5.64103 7.12694 5.19861 8.24997 5.19861C9.373 5.19861 10.4508 5.64103 11.25 6.43004C11.3429 6.52377 11.4535 6.59817 11.5754 6.64893C11.6973 6.6997 11.828 6.72584 11.96 6.72584C12.092 6.72584 12.2227 6.6997 12.3445 6.64893C12.4664 6.59817 12.577 6.52377 12.67 6.43004C13.4691 5.64103 14.5469 5.19861 15.67 5.19861C16.793 5.19861 17.8708 5.64103 18.67 6.43004C19.465 7.22119 19.9186 8.29223 19.9335 9.41373C19.9485 10.5352 19.5236 11.618 18.75 12.43V12.46Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300"></div>
            </div>
            <div className="pb-8 ">
              <p className="mb-2 text-3xl font-bold text-white uppercase">
                Cosa
              </p>
              <p className="text-white text-xl ">
                Matrimonio di Barbi e Giuppi (featuring Jacopo).
              </p>
            </div>
          </div>
          <div className="flex" id="quando">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-16 h-16 border rounded-full">
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 19C12.1978 19 12.3911 18.9414 12.5556 18.8315C12.72 18.7216 12.8482 18.5654 12.9239 18.3827C12.9996 18.2 13.0194 17.9989 12.9808 17.8049C12.9422 17.6109 12.847 17.4327 12.7071 17.2929C12.5673 17.153 12.3891 17.0578 12.1951 17.0192C12.0011 16.9806 11.8 17.0004 11.6173 17.0761C11.4346 17.1518 11.2784 17.28 11.1685 17.4444C11.0586 17.6089 11 17.8022 11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19ZM17 19C17.1978 19 17.3911 18.9414 17.5556 18.8315C17.72 18.7216 17.8482 18.5654 17.9239 18.3827C17.9996 18.2 18.0194 17.9989 17.9808 17.8049C17.9422 17.6109 17.847 17.4327 17.7071 17.2929C17.5673 17.153 17.3891 17.0578 17.1951 17.0192C17.0011 16.9806 16.8 17.0004 16.6173 17.0761C16.4346 17.1518 16.2784 17.28 16.1685 17.4444C16.0586 17.6089 16 17.8022 16 18C16 18.2652 16.1054 18.5196 16.2929 18.7071C16.4804 18.8946 16.7348 19 17 19ZM17 15C17.1978 15 17.3911 14.9414 17.5556 14.8315C17.72 14.7216 17.8482 14.5654 17.9239 14.3827C17.9996 14.2 18.0194 13.9989 17.9808 13.8049C17.9422 13.6109 17.847 13.4327 17.7071 13.2929C17.5673 13.153 17.3891 13.0578 17.1951 13.0192C17.0011 12.9806 16.8 13.0004 16.6173 13.0761C16.4346 13.1518 16.2784 13.28 16.1685 13.4444C16.0586 13.6089 16 13.8022 16 14C16 14.2652 16.1054 14.5196 16.2929 14.7071C16.4804 14.8946 16.7348 15 17 15ZM12 15C12.1978 15 12.3911 14.9414 12.5556 14.8315C12.72 14.7216 12.8482 14.5654 12.9239 14.3827C12.9996 14.2 13.0194 13.9989 12.9808 13.8049C12.9422 13.6109 12.847 13.4327 12.7071 13.2929C12.5673 13.153 12.3891 13.0578 12.1951 13.0192C12.0011 12.9806 11.8 13.0004 11.6173 13.0761C11.4346 13.1518 11.2784 13.28 11.1685 13.4444C11.0586 13.6089 11 13.8022 11 14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15ZM19 3H18V2C18 1.73478 17.8946 1.48043 17.7071 1.29289C17.5196 1.10536 17.2652 1 17 1C16.7348 1 16.4804 1.10536 16.2929 1.29289C16.1054 1.48043 16 1.73478 16 2V3H8V2C8 1.73478 7.89464 1.48043 7.70711 1.29289C7.51957 1.10536 7.26522 1 7 1C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V20C2 20.7956 2.31607 21.5587 2.87868 22.1213C3.44129 22.6839 4.20435 23 5 23H19C19.7956 23 20.5587 22.6839 21.1213 22.1213C21.6839 21.5587 22 20.7956 22 20V6C22 5.20435 21.6839 4.44129 21.1213 3.87868C20.5587 3.31607 19.7956 3 19 3ZM20 20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V11H20V20ZM20 9H4V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H6V6C6 6.26522 6.10536 6.51957 6.29289 6.70711C6.48043 6.89464 6.73478 7 7 7C7.26522 7 7.51957 6.89464 7.70711 6.70711C7.89464 6.51957 8 6.26522 8 6V5H16V6C16 6.26522 16.1054 6.51957 16.2929 6.70711C16.4804 6.89464 16.7348 7 17 7C17.2652 7 17.5196 6.89464 17.7071 6.70711C17.8946 6.51957 18 6.26522 18 6V5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6V9ZM7 15C7.19778 15 7.39112 14.9414 7.55557 14.8315C7.72002 14.7216 7.84819 14.5654 7.92388 14.3827C7.99957 14.2 8.01937 13.9989 7.98079 13.8049C7.9422 13.6109 7.84696 13.4327 7.70711 13.2929C7.56725 13.153 7.38907 13.0578 7.19509 13.0192C7.00111 12.9806 6.80004 13.0004 6.61732 13.0761C6.43459 13.1518 6.27841 13.28 6.16853 13.4444C6.05865 13.6089 6 13.8022 6 14C6 14.2652 6.10536 14.5196 6.29289 14.7071C6.48043 14.8946 6.73478 15 7 15ZM7 19C7.19778 19 7.39112 18.9414 7.55557 18.8315C7.72002 18.7216 7.84819 18.5654 7.92388 18.3827C7.99957 18.2 8.01937 17.9989 7.98079 17.8049C7.9422 17.6109 7.84696 17.4327 7.70711 17.2929C7.56725 17.153 7.38907 17.0578 7.19509 17.0192C7.00111 16.9806 6.80004 17.0004 6.61732 17.0761C6.43459 17.1518 6.27841 17.28 6.16853 17.4444C6.05865 17.6089 6 17.8022 6 18C6 18.2652 6.10536 18.5196 6.29289 18.7071C6.48043 18.8946 6.73478 19 7 19Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300"></div>
            </div>
            <div className="pb-8 ">
              <p className="mb-2 text-3xl font-bold text-white uppercase">
                Quando
              </p>
              <p className="text-white text-xl ">11 giugno 2022</p>
              <p className="text-white text-xl">Cerimonia ore 11:00</p>
              <p className="text-white text-xl">Rinfresco ore 13:00</p>
            </div>
          </div>
          <div className="flex" id="dove">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-16 h-16 border rounded-full">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.50386 1.13176C7.79416 0.965872 8.14816 0.956046 8.44721 1.10557L15.9685 4.86623L22.5039 1.13176C22.8134 0.954898 23.1936 0.956168 23.5019 1.13509C23.8102 1.31401 24 1.64353 24 2V18C24 18.3589 23.8077 18.6902 23.4961 18.8682L16.4961 22.8682C16.2058 23.0341 15.8518 23.044 15.5528 22.8944L8.03147 19.1338L1.49614 22.8682C1.18664 23.0451 0.806388 23.0438 0.498073 22.8649C0.189758 22.686 0 22.3565 0 22V6C0 5.64114 0.192286 5.3098 0.503861 5.13176L7.50386 1.13176ZM8.03147 3.13377L2 6.58032V20.2768L7.50386 17.1318C7.79416 16.9659 8.14816 16.956 8.44721 17.1056L15.9685 20.8662L22 17.4197V3.72318L16.4961 6.86824C16.2058 7.03413 15.8518 7.04395 15.5528 6.89443L8.03147 3.13377Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 5C16.5523 5 17 5.44772 17 6V22C17 22.5523 16.5523 23 16 23C15.4477 23 15 22.5523 15 22V6C15 5.44772 15.4477 5 16 5Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 1C8.55228 1 9 1.44772 9 2V18C9 18.5523 8.55228 19 8 19C7.44772 19 7 18.5523 7 18V2C7 1.44772 7.44772 1 8 1Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300"></div>
            </div>
            <div className="pb-8 ">
              <p className="mb-2 text-3xl font-bold text-white uppercase">
                Dove
              </p>
              <p className="text-white text-xl ">
                <span className="font-bold">Cerimonia:</span> Chiesa San
                Martino, Castiglione T.se (TO){" - "}
                <a
                  href="https://www.google.com/maps/place/Chiesa+di+San+Martino/@45.101002,7.7982593,15z/data=!4m2!3m1!1s0x0:0x789c21bf48865d73?sa=X&ved=2ahUKEwjIyrCg08P2AhUL_bsIHVkhBZoQ_BJ6BAg9EAU"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Guarda la mappa
                </a>
              </p>
              <p className="text-white text-xl ">
                <span className="font-bold">Rinfresco:</span> Centro Paluc,
                Baldissero T.se (TO){" - "}
                <a
                  href="https://www.google.com/maps/place/CENTRO+PALUC/@45.0722343,7.7929508,17z/data=!4m12!1m6!3m5!1s0x0:0x789c21bf48865d73!2sChiesa+di+San+Martino!8m2!3d45.1010005!4d7.7982459!3m4!1s0x4788747e54897fc5:0x7dd8b7d04ad1d83f!8m2!3d45.0733452!4d7.7916687"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Guarda la mappa
                </a>
              </p>
            </div>
          </div>
          <div className="flex" id="chi">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-16 h-16 border rounded-full">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.0318 14.88C19.1698 14.3453 19.7153 14.0237 20.25 14.1618C21.3227 14.4387 22.273 15.0641 22.9517 15.9397C23.6304 16.8152 23.9992 17.8914 24 18.9993L24 21C24 21.5523 23.5523 22 23 22C22.4477 22 22 21.5523 22 21L22 19.0007C22 19.0006 22 19.0008 22 19.0007C21.9994 18.3361 21.7782 17.6902 21.371 17.165C20.9638 16.6396 20.3936 16.2644 19.75 16.0982C19.2153 15.9602 18.8937 15.4148 19.0318 14.88Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.46447 15.4645C2.40215 14.5268 3.67392 14 5 14H13C14.3261 14 15.5979 14.5268 16.5355 15.4645C17.4732 16.4021 18 17.6739 18 19V21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21V19C16 18.2044 15.6839 17.4413 15.1213 16.8787C14.5587 16.3161 13.7956 16 13 16H5C4.20435 16 3.44129 16.3161 2.87868 16.8787C2.31607 17.4413 2 18.2044 2 19V21C2 21.5523 1.55228 22 1 22C0.447715 22 0 21.5523 0 21V19C0 17.6739 0.526784 16.4021 1.46447 15.4645Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.0312 2.88196C15.1682 2.34694 15.713 2.02426 16.248 2.16125C17.3236 2.43663 18.2768 3.06213 18.9576 3.93914C19.6383 4.81615 20.0078 5.89479 20.0078 7.005C20.0078 8.11521 19.6383 9.19385 18.9576 10.0709C18.2768 10.9479 17.3236 11.5734 16.248 11.8488C15.713 11.9857 15.1682 11.6631 15.0312 11.128C14.8943 10.593 15.2169 10.0482 15.752 9.91125C16.3973 9.74603 16.9692 9.37073 17.3777 8.84452C17.7861 8.31831 18.0078 7.67113 18.0078 7.005C18.0078 6.33887 17.7861 5.69169 17.3777 5.16548C16.9692 4.63928 16.3973 4.26398 15.752 4.09875C15.2169 3.96176 14.8943 3.41699 15.0312 2.88196Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 4C7.34315 4 6 5.34315 6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4ZM4 7C4 4.23858 6.23858 2 9 2C11.7614 2 14 4.23858 14 7C14 9.76142 11.7614 12 9 12C6.23858 12 4 9.76142 4 7Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300"></div>
            </div>
            <div className="pb-8 ">
              <p className="mb-2 text-3xl font-bold text-white uppercase">
                Chi
              </p>

              <div className="">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="flex  flex-col  gap-8">
                    <div className="flex flex-col gap-2 ">
                      <p className="text-xl tracking-tight  sm:text-xl text-white">
                        Confermi la tua partecipazione?
                      </p>
                      <div className="w-32">
                        <Confirm />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <p className="text-xl tracking-tight  sm:text-xl text-white">
                        Quante persone sarete?
                      </p>
                      <div className="w-64 flex gap-8">
                        <div>
                          <label
                            htmlFor="adults"
                            className="block text-sm font-medium text-white"
                          >
                            Adulti
                          </label>
                          <select
                            id="adults"
                            name="adults"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-700 focus:border-red-700 sm:text-sm rounded-md"
                            defaultValue="1"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="children"
                            className="block text-sm font-medium text-white"
                          >
                            Bimbi
                          </label>
                          <select
                            id="children"
                            name="children"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-400 focus:border-red-400 sm:text-sm rounded-md"
                            defaultValue="0"
                          >
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="comment"
                        className="block text-sm font-medium text-white"
                      >
                        Note/intolleranze alimentari/necessità/varieedeventuali
                      </label>
                      <div className="mt-1">
                        <textarea
                          rows={4}
                          name="comment"
                          id="comment"
                          className="shadow-sm focus:ring-red-400 focus:border-red-400 block w-full sm:text-sm border-gray-300 rounded-md"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex" id="come">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-16 h-16 border rounded-full">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.2646 2.42772C21.9799 2.19085 21.6363 2.03561 21.2704 1.97852C20.9044 1.92143 20.5298 1.96463 20.1865 2.10351L2.2656 9.33886C1.88235 9.49654 1.55612 9.76705 1.3302 10.1145C1.10428 10.4619 0.989366 10.8698 1.0007 11.2841C1.01204 11.6984 1.1491 12.0994 1.39368 12.4339C1.63826 12.7685 1.9788 13.0207 2.3701 13.1572L5.9951 14.418L8.0156 21.0996C8.04306 21.1889 8.0829 21.2738 8.13398 21.352C8.14173 21.364 8.15266 21.3729 8.1609 21.3846C8.2199 21.4669 8.29121 21.5397 8.37233 21.6003C8.3954 21.6179 8.41749 21.6344 8.44215 21.65C8.53708 21.713 8.64222 21.7591 8.75288 21.7861L8.76472 21.7871L8.77143 21.79C8.83796 21.8035 8.90568 21.8104 8.97358 21.8105C8.98011 21.8105 8.98591 21.8074 8.99238 21.8073C9.09484 21.8055 9.19641 21.7878 9.29347 21.755C9.31605 21.7473 9.3354 21.7344 9.35731 21.7251C9.42969 21.6951 9.49826 21.6567 9.5616 21.6106C9.61232 21.5678 9.66306 21.5251 9.71382 21.4824L12.416 18.499L16.4462 21.6211C16.8011 21.8973 17.2378 22.0474 17.6875 22.0478C18.1586 22.0472 18.6153 21.8846 18.9808 21.5874C19.3464 21.2901 19.5987 20.8762 19.6953 20.415L22.958 4.39843C23.0319 4.03795 23.0065 3.66415 22.8843 3.31702C22.7622 2.96989 22.548 2.66249 22.2646 2.42772ZM9.3701 14.7363C9.23144 14.8744 9.13666 15.0504 9.09764 15.2422L8.78813 16.7462L8.00407 14.1531L12.0693 12.0362L9.3701 14.7363ZM17.6719 20.04L12.9092 16.3505C12.7099 16.1966 12.4599 16.1233 12.2091 16.1454C11.9583 16.1675 11.7249 16.2833 11.5556 16.4697L10.6902 17.4249L10.9961 15.9384L18.0791 8.85543C18.2481 8.68659 18.3511 8.46278 18.3694 8.22455C18.3877 7.98632 18.3201 7.74941 18.1788 7.55675C18.0375 7.36408 17.8318 7.22839 17.5991 7.17426C17.3664 7.12014 17.122 7.15115 16.9101 7.26168L6.74485 12.5543L3.02049 11.1914L20.999 3.99899L17.6719 20.04Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300"></div>
            </div>
            <div className="pb-8">
              <p className="mb-2 text-3xl font-bold text-white uppercase">
                Come
              </p>
              <div className="pb-8 flex flex-col gap-4">
                <p className="text-white text-xl">
                  Vuoi sapere come dimostrarci il tuo affetto?
                </p>
                <p className="text-white text-xl">
                  Supportaci per il grande viaggio di famiglia che stiamo
                  organizzando!
                </p>
                <p className="text-white text-xl">
                  <span>IBAN:</span> IT02302340928350257092487
                </p>
                <p className="text-white text-xl">
                  <span>Intestato a</span> Giuseppe Funicello
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-16 h-16 border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-1">
              <p className="mb-2 text-3xl uppercase font-bold text-white ">
                Vi aspettiamo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
