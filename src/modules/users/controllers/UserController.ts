import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

export class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const username = request.body;
    const email = request.body;
    const password = request.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute(username, email, password);
    return response.json(user);
  }
}
