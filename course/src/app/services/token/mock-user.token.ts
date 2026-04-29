import { InjectionToken } from "@angular/core";
import { MockUser } from "../../types/mock-user";

export const MOCK_USER = new InjectionToken<MockUser>('MockUser');
