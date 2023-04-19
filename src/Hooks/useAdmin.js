import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  console.log(admin);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://hostel-system.onrender.com/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data);
          setAdminLoading(false);
        });
    }
  }, [user]);
  return [admin, adminLoading];
};
export default useAdmin;
