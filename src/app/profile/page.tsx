import React from "react";
import ProfilePic from "@/assets/img/rakib.jpg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";

const Profile = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-fit">
        <Image
          src={ProfilePic}
          className="rounded-full border-2 border-accent/50"
          width="160"
          alt="Rakib"
        />
        <h3 className="text-xl font-bold mt-3">Md.Rakibuzzaman</h3>
        <div>
          <span className="text-sm">Website: &nbsp;</span>
          <Link
            href="https://myselfrakib.vercel.app/"
            className="text-sm text-accent hover:underline"
            target="_blank"
          >
            myselfrakib.com
          </Link>
        </div>
        <div>
          <span className="text-sm">Github: &nbsp;</span>
          <Link
            href="https://github.com/mohammedrakib944"
            className="text-sm text-accent hover:underline"
            target="_blank"
          >
            github.com/mohammedrakib944
          </Link>
        </div>
        <div>
          <span className="text-sm">Linkedin: &nbsp;</span>
          <Link
            href="https://www.linkedin.com/in/md-rakibuzzaman-246a701b2/"
            className="text-sm text-accent hover:underline"
            target="_blank"
          >
            Linkedin
          </Link>
        </div>
        <br />
        <Button>Update Profile</Button>
      </div>
    </div>
  );
};

export default Profile;
