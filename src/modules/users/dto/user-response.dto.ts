import { UserRole } from '../user.entity';

export class UserResponseDto {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  emailVerified: boolean;
  createdAt: Date;
  timezone: string;
}
