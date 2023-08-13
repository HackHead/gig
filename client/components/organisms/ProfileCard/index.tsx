const ProfileCard = () => {
    return (
      <div className="card mb-5 mb-xl-8 shadow-lg p-4">
        <div className="card-body pt-15 px-0">
          <div className="flex flex-col items-center mb-9 px-9">
            <div className="symbol symbol-80px symbol-lg-150px mb-4">
              <img src="https://via.placeholder.com/150" className="" alt="" />
            </div>
  
            <div className="text-center">
              <a
                href="/metronic8/demo1/../demo1/pages/user-profile/overview.html"
                className="text-gray-800 font-bold hover:text-primary text-xl"
              >
                Jerry Kane
              </a>
  
              <span className="text-muted block font-semibold">Grade 8, AE3 Student</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 px-9 mb-4">
            <div className="text-center">
              <div className="text-gray-800 font-bold text-3xl">
                <span className="counted" data-kt-countup="true" data-kt-countup-value="642" data-kt-initialized="1">
                  642
                </span>
              </div>
  
              <span className="text-gray-500 text-xs font-bold">POSTS</span>
            </div>
            <div className="text-center">
              <div className="text-gray-800 font-bold text-3xl">
                <span className="counted" data-kt-countup="true" data-kt-countup-value="24" data-kt-initialized="1">
                  24
                </span>{" "}
                K
              </div>
  
              <span className="text-gray-500 text-xs font-bold">FOLLOWERS</span>
            </div>
            <div className="text-center">
              <div className="text-gray-800 font-bold text-3xl">
                <span className="counted" data-kt-countup="true" data-kt-countup-value="12" data-kt-initialized="1">
                  12
                </span>{" "}
                K
              </div>
  
              <span className="text-gray-500 text-xs font-bold">FOLLOWING</span>
            </div>
          </div>
          <div className="mt-0">
            <ul className="flex flex-col border-transparent text-lg font-bold">
              <li className="mt-5">
                <a
                  className="nav-link text-muted active:text-primary flex items-center"
                  href="/metronic8/demo1/../demo1/pages/social/feeds.html"
                >
                  <i className="ki ki-duotone ki-row-horizontal text-muted text-3xl me-3">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                  Feeds
                  <span className="bullet-custom absolute start-0 top-0 w-3px h-full bg-primary rounded-end"></span>
                </a>
              </li>
              <li className="mt-5">
                <a
                  className="nav-link text-muted active:text-primary flex items-center"
                  href="/metronic8/demo1/../demo1/pages/social/activity.html"
                >
                  <i className="ki ki-duotone ki-chart-simple-2 text-muted text-3xl me-3">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                  </i>
                  Activity
                  <span className="bullet-custom absolute start-0 top-0 w-3px h-full bg-primary rounded-end"></span>
                </a>
              </li>
              <li className="mt-5">
                <a
                  className="nav-link text-muted active:text-primary flex items-center"
                  href="/metronic8/demo1/../demo1/pages/social/followers.html"
                >
                  <i className="ki ki-duotone ki-profile-circle text-muted text-3xl me-3">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                  </i>
                  Followers
                  <span className="bullet-custom absolute start-0 top-0 w-3px h-full bg-primary rounded-end"></span>
                </a>
              </li>
              <li className="mt-5">
                <a
                  className="nav-link text-muted active:text-primary flex items-center"
                  href="/metronic8/demo1/../demo1/pages/social/settings.html"
                >
                  <i className="ki ki-duotone ki-setting-2 text-muted text-3xl me-3">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                  Settings
                  <span className="bullet-custom absolute start-0 top-0 w-3px h-full bg-primary rounded-end"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  