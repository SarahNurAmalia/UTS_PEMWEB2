import type { Request, Response } from "express";
export declare const getAllCategory: (req: Request, res: Response) => Promise<void>;
export declare const createCategory: (req: Request, res: Response) => Promise<void>;
export declare const categoryById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateById: (req: Request, res: Response) => Promise<void>;
export declare const deleteById: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=categoryController.d.ts.map