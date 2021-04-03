import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType
} from "../providers/LoginUesrProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
