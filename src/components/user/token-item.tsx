import React from "react";
import PermissionsDialog from "./permissions-dialog";
import DeleteDialog from "./delete-dialog";

interface Props {
  token: { input: string; premission: string | null };
  deleteFn: (index: number) => void;
  updatePermission: (index: number, permission: string | null) => void;
  index: number;
}

function TokenItem({ token, deleteFn, index, updatePermission }: Props) {
  console.log(token);
  return (
    <div className="flex items-center justify-between">
      <div className="break-all">{token.input}</div>

      <div className="flex items-center ms-2">
        <PermissionsDialog
          premission={token.premission}
          updatePermission={updatePermission}
          index={index}
        >
          <button
            type="button"
            className="cursor-pointer ms-6 text-sm text-gray-400 underline"
          >
            Permissions
          </button>
        </PermissionsDialog>
        <DeleteDialog deleteFn={deleteFn} index={index}>
          <button className="cursor-pointer ms-6 text-sm text-red-500">
            Delete
          </button>
        </DeleteDialog>
      </div>
    </div>
  );
}

export default TokenItem;
