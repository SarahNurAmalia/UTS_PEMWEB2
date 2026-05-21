import type { Request, Response } from "express";
export declare const getAllEvents: (req: Request, res: Response) => Promise<void>;
export declare const createEvent: (req: Request, res: Response) => Promise<void>;
export declare const eventById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateById: (req: Request, res: Response) => Promise<void>;
export declare const deleteById: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=eventController.d.ts.map